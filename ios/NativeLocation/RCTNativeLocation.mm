
#import "RCTNativeLocation.h"
#import <CoreLocation/CoreLocation.h>

@interface RCTNativeLocation() <CLLocationManagerDelegate>
@property (nonatomic, strong) CLLocationManager *locationManager;
@property (nonatomic, copy)  CLLocation *currentLocation;
@property (nonatomic, strong) RCTPromiseResolveBlock permissionResolve;
@end
@implementation RCTNativeLocation

RCT_EXPORT_MODULE(NativeLocation)



- (std::shared_ptr<facebook::react::TurboModule>)getTurboModule:(const facebook::react::ObjCTurboModule::InitParams &)params {
  return std::make_shared<facebook::react::NativeLocationSpecJSI>(params);
}

- (void)getLocation:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock)reject {
  @try {
          CLLocationManager *locationManager = [[CLLocationManager alloc] init];
          locationManager.delegate = self;
          locationManager.distanceFilter = kCLDistanceFilterNone;
          locationManager.desiredAccuracy = kCLLocationAccuracyBest;
          [locationManager requestWhenInUseAuthorization];
          [locationManager startUpdatingLocation];
          
          CLLocation *location = [locationManager location];
          CLLocationCoordinate2D coordinate = [location coordinate];
          
          NSDictionary *locationData = @{
                @"longitude": @(coordinate.longitude),
                @"latitude": @(coordinate.latitude)
            };
          resolve(locationData);
      } @catch (NSException *exception) {
          reject(@"Error description", @"Can not get the current location", nil);
      };
}

- (NSNumber *)getPermission { 
  if ([CLLocationManager locationServicesEnabled]) {
      if ([CLLocationManager authorizationStatus] == kCLAuthorizationStatusAuthorizedWhenInUse) {
          return @1;
      } else {
          return @0;
      }
  } else {
      return @0;
  }
}


- (void)locationManager:(CLLocationManager *)manager didUpdateLocations:(NSArray *)locations
{
    self.currentLocation = [locations lastObject];
    [self.locationManager stopUpdatingLocation];
}

@end

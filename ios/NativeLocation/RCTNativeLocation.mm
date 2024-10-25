
#import "RCTNativeLocation.h"
#import <CoreLocation/CoreLocation.h>

@interface RCTNativeLocation() <CLLocationManagerDelegate>
@property (nonatomic, strong) CLLocationManager *locationManager;
@property (nonatomic, copy)  CLLocation *currentLocation;;
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
          
          // Get coordinate data
          CLLocation *location = [locationManager location];
          CLLocationCoordinate2D coordinate = [location coordinate];
          
          NSDictionary *locationData = @{
                @"longitude": @(location.coordinate.longitude),
                @"latitude": @(location.coordinate.latitude)
            };
          resolve(locationData);
      } @catch (NSException *exception) {
          reject(@"Error description", @"Can not get the current location", nil);
      };
}

- (void)locationManager:(CLLocationManager *)manager didUpdateLocations:(NSArray *)locations
{
    self.currentLocation = [locations lastObject];
    [self.locationManager stopUpdatingLocation];
}

@end

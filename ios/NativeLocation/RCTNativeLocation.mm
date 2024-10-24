
#import "RCTNativeLocation.h"
#import <CoreLocation/CoreLocation.h>

@interface RCTNativeLocation() <CLLocationManagerDelegate>
@property (nonatomic, strong) CLLocationManager *locationManager;
@property (nonatomic, copy) RCTPromiseResolveBlock resolveBlock;
@property (nonatomic, copy) RCTPromiseRejectBlock rejectBlock;
@end
@implementation RCTNativeLocation

RCT_EXPORT_MODULE(NativeLocation)

- (std::shared_ptr<facebook::react::TurboModule>)getTurboModule:(const facebook::react::ObjCTurboModule::InitParams &)params { 
  return std::make_shared<facebook::react::NativeLocationSpecJSI>(params);
}

- (void)getLocation:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock)reject { 
  self.resolveBlock = resolve;
  self.rejectBlock = reject;
  
  self.locationManager = [[CLLocationManager alloc] init];
  self.locationManager.delegate = self;
  [self.locationManager requestWhenInUseAuthorization];
  if ([CLLocationManager locationServicesEnabled]) {
    [self.locationManager requestLocation];
  } else {
      self.rejectBlock(@"location_services_disabled", @"Location services are disabled", nil);
  }
}

#pragma mark - CLLocationManagerDelegate

// TODO: didUpdateLocations isn`t called for some reason
- (void)locationManager:(CLLocationManager *)manager didUpdateLocations:(NSArray<CLLocation *> *)locations {
    CLLocation *location = [locations lastObject];
    if (location) {
        NSDictionary *locationData = @{
            @"longitude": @(location.coordinate.longitude),
            @"latitude": @(location.coordinate.latitude)
        };
        self.resolveBlock(locationData);
    } else {
        self.rejectBlock(@"no_location", @"Could not fetch location", nil);
    }
    [self.locationManager stopUpdatingLocation];
}

- (void)locationManager:(CLLocationManager *)manager didFailWithError:(NSError *)error {
    self.rejectBlock(@"location_error", error.localizedDescription, error);
}

@end

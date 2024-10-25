package com.onboarding.modules

import android.Manifest
import android.Manifest.permission
import android.content.Context
import android.content.pm.PackageManager
import android.location.LocationManager
import androidx.annotation.RequiresPermission
import androidx.core.app.ActivityCompat
import androidx.core.content.ContextCompat
import androidx.core.location.LocationManagerCompat
import com.facebook.react.bridge.Arguments
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.onboarding.NativeLocationSpec


class NativeLocationModule(val reactContext: ReactApplicationContext) :
    NativeLocationSpec(reactContext) {
    companion object {
        const val NAME = "NativeLocation"
    }

    override fun getName() = NAME

    private val locationManager by lazy {
        reactContext.getSystemService(Context.LOCATION_SERVICE) as LocationManager
    }

    override fun getLocation(promise: Promise) {
        val provider = if (locationManager.allProviders.contains("gps")) {
            "gps"
        } else locationManager.allProviders.first()
        if (ActivityCompat.checkSelfPermission(
                reactContext,
                permission.ACCESS_FINE_LOCATION
            ) != PackageManager.PERMISSION_GRANTED && ActivityCompat.checkSelfPermission(
                reactContext,
                permission.ACCESS_COARSE_LOCATION
            ) != PackageManager.PERMISSION_GRANTED
        ) {
            return
        }
        var retryCount = 0
        fun getLocation() {
            LocationManagerCompat.getCurrentLocation(
                locationManager,
                provider,
                null,
                ContextCompat.getMainExecutor(reactContext),
            ) { location ->
                if (location == null) {
                    if (retryCount < 3) {
                        retryCount += 1
                        getLocation()
                        return@getCurrentLocation
                    }
                }
                promise.resolve(Arguments.createMap().apply {
                    putDouble("longitude", location.longitude)
                    putDouble("latitude", location.latitude)
                })
            }
        }
        getLocation()
    }
}


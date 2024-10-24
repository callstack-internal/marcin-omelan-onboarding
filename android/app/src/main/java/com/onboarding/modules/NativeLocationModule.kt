package com.onboarding.modules

import android.Manifest
import android.content.Context
import android.content.pm.PackageManager
import android.location.LocationManager
import android.location.LocationRequest
import androidx.activity.result.contract.ActivityResultContracts
import androidx.appcompat.app.AppCompatActivity
import androidx.core.app.ActivityCompat
import androidx.core.content.ContextCompat
import androidx.core.content.PackageManagerCompat
import androidx.core.location.LocationManagerCompat
import androidx.core.location.LocationRequestCompat
import com.facebook.react.bridge.Arguments
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.WritableMap
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
                Manifest.permission.ACCESS_FINE_LOCATION
            ) != PackageManager.PERMISSION_GRANTED && ActivityCompat.checkSelfPermission(
                reactContext,
                Manifest.permission.ACCESS_COARSE_LOCATION
            ) != PackageManager.PERMISSION_GRANTED
        ) {
            return
        }
        LocationManagerCompat.getCurrentLocation(locationManager,
            provider,
            null,
            ContextCompat.getMainExecutor(reactContext),
        ) { location ->
            promise.resolve(Arguments.createMap().apply {
                putDouble("longitude", location.longitude)
                putDouble("latitude", location.latitude)
            })
        }
    }
}

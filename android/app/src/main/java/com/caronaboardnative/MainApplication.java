package com.caronaboardnative;

import android.app.Application;

import com.oblador.vectoricons.VectorIconsPackage;
import com.facebook.react.ReactPackage;
import com.reactnativenavigation.NavigationApplication;
import com.BV.LinearGradient.LinearGradientPackage;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends NavigationApplication {

  @Override
  public boolean isDebug() {
    return BuildConfig.DEBUG;
  }

  protected List<ReactPackage> getPackages() {
    return Arrays.<ReactPackage>asList(
        new VectorIconsPackage(),
        new LinearGradientPackage()
    );
  }

  @Override
  public List<ReactPackage> createAdditionalReactPackages() {
    return getPackages();
  }

}

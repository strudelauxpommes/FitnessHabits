FitnessHabits
=============

Install
-------
* The project uses [Ionic] framework to build a multiplateform mobile app.
* The project uses [Capacitor] rather than cordova. Cordova is installed by default with ionic. However, it does not support Ionic + React.
* The project can run under [Android Studio]. Open it with `npx cap open android`. The project should configure itself the first time.
* Go to [add platform] if you want to configure and run an iOS platform.

Run
---

Once [Android Studio] is loaded, make a new virtual device or plug your own. Then, press play to interact with the device.

Tests
-----

Please, visit the following link [watcher limit] should you face an error looking like:

    ENOSPC: System limit for number of file watchers reached, watch 'path/to/project'


References
----------

[Ionic]: https://ionicframework.com/docs/installation/cli/
[Android Studio]: https://developer.android.com/studio/install
[Capacitor]: https://capacitor.ionicframework.com/docs/getting-started/with-ionic
[add platform]: https://capacitor.ionicframework.com/docs/getting-started/with-ionic/#add-platforms
[watcher limit]: https://github.com/gatsbyjs/gatsby/issues/11406#issuecomment-458769756

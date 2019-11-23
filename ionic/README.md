FitnessHabits
=============

## Main Page

Main page prototype is available. Before reading and executing the commands found below, make sure you are in the `mainpage` branch. If you are not, here is the commands : 

* Clone the repository with `git clone <repo url>`
* In terminal, move to the project folder `cd .../your_working_directory/FitnessHabits/ionic`
* Write this command : `git checkout mainpage`
* Then, run the commands below

Image of the app running is available in the WIKI of the repository.

Prerquisites
------------
* The project uses [Ionic] framework to build a multiplateform mobile app.
    ```sh
    $ npm install -g ionic
    ```
---
**NOTE**

Be carefull, if installing `ionic` or other modules needs permissions, you may 
attempted to use `sudo` (i.e. `sudo npm instal ...`). Read [Don’t Use `sudo` with `npm`]
to know how to avoid this.

---

* The project can run under [Android Studio] for android smartphone simulations. 


Install
-------
* The project uses [Capacitor] rather than Cordova. Cordova is installed by default with ionic. However, it does not support Ionic + React. Since [Capacitor] is included in our `package.json`, a simple `npm install` will install [Capacitor] and all other required modules.
    ```sh
    $ cd <ionic-project-directory>
    $ npm install
    ```
* Build your project with [Ionic]
    ```sh
    $ ionic build
    ```

Run
---
* The project can run under [Android Studio]. First, you will have to configure [Capacitor] for launching [Android Studio]. In your `<ionic-project-directory>/capacitor.config.json` file, add this configuration (for Windows users, please visit [Capacitor configurations]):
    ```json
    {
        "linuxAndroidStudioPath": "<path-to-your-android-studio>/bin/studio.sh"
    }    
    ```
* Update android with Capacitor plugins :
    ```sh
    $ npx cap update
    ```
* Open it with `npx cap open android`. The project should configure itself the first time.
* Once [Android Studio] is loaded, make a [new virtual device] or plug your own. Then, press play to interact with the device.
* Or, just serve the app with a static server
    ```sh
    $ serve -s build
    ```

Tests
-----
* To run unit tests :
    ```sh
    $ npm test
    ```
* Please, visit the following link [watcher limit] should you face an error looking like:
    ```
    ENOSPC: System limit for number of file watchers reached, watch 'path/to/project'
    ```

References
----------
- [Ionic]
- [Android Studio] and how to add [new virtual device]
- [Capacitor] and [Capacitor configurations]
- [watcher limit]
- [Don’t Use `sudo` with `npm`]

[Ionic]: https://ionicframework.com/docs/installation/cli/
[Android Studio]: https://developer.android.com/studio/install
[Capacitor]: https://capacitor.ionicframework.com/docs/getting-started/with-ionic
[Capacitor configurations]: https://capacitor.ionicframework.com/docs/basics/configuring-your-app/
[new virtual device]: https://developer.android.com/studio/run/managing-avds
[watcher limit]: https://github.com/gatsbyjs/gatsby/issues/11406#issuecomment-458769756
[Don’t Use `sudo` with `npm`]: https://medium.com/@ExplosionPills/dont-use-sudo-with-npm-still-66e609f5f92

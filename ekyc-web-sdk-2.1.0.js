var ekycsdk = function(e) {
    var t = {};
    function i(n) {
        if (t[n])
            return t[n].exports;
        var a = t[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return e[n].call(a.exports, a, a.exports, i),
        a.l = !0,
        a.exports
    }
    return i.m = e,
    i.c = t,
    i.d = function(e, t, n) {
        i.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }
    ,
    i.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    i.t = function(e, t) {
        if (1 & t && (e = i(e)),
        8 & t)
            return e;
        if (4 & t && "object" == typeof e && e && e.__esModule)
            return e;
        var n = Object.create(null);
        if (i.r(n),
        Object.defineProperty(n, "default", {
            enumerable: !0,
            value: e
        }),
        2 & t && "string" != typeof e)
            for (var a in e)
                i.d(n, a, function(t) {
                    return e[t]
                }
                .bind(null, a));
        return n
    }
    ,
    i.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        }
        : function() {
            return e
        }
        ;
        return i.d(t, "a", t),
        t
    }
    ,
    i.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    i.p = "",
    i(i.s = 0)
}([function(e, t, i) {
    e.exports = i(5)
}
, function(e, t, i) {
    var n = {
        "./en.json": 2,
        "./locales.json": 3,
        "./vi.json": 4
    };
    function a(e) {
        var t = o(e);
        return i(t)
    }
    function o(e) {
        if (!i.o(n, e)) {
            var t = new Error("Cannot find module '" + e + "'");
            throw t.code = "MODULE_NOT_FOUND",
            t
        }
        return n[e]
    }
    a.keys = function() {
        return Object.keys(n)
    }
    ,
    a.resolve = o,
    e.exports = a,
    a.id = 1
}
, function(e) {
    e.exports = JSON.parse('{"home":{"title":"SELECT IDENTIFICATION DOCUMENT","cmt":"ID card, Citizen Identity card","passpost":"Passport","cmt_army":"Military ID card","license":"Driver\'s license","cmt_chip":"Chip identification card","start":"START"},"face":{"portrait":"Portrait","please":"Please","des_1":"Move the face to fit the restricted area","take_photo":"Take photo","take_again":"Take again","next":"Next","guide":"Guideline","guide_1":"Guideline for verifying document owner\'s face","guide_2":"Move the face to fit the restricted area","guide_3":"Keep your face steady when taking a photo","guide_4":"Avoid other people appearing in the camera while taking photos","touch":"Touch to take a photo","guide_5":"Keep document within the rectangular frame,","guide_6":"capture enough lighting and clarity","guide_7":"Move the face to fit","guide_8":"the restricted area","guide_9":"Please remove the glasses"},"front":{"qr":"QR code","front":"Front","back":"Back","result":"Result","guide_1":"Guideline for capturing your documents","guide_2":"Bring your document to the camera so that its four corners match with the restricted area","guide_3":"Capture information on document clearly and completely ","guide_4":"Place document within the rectangular frame, capture enough lighting and clarity","guide_5":"Select Retake if the image is blurry, not in focus","guide_6":"Select Next to go to the next step","guide_7":"Select “Next” to go to the next step","upload_image":"Upload image","qr_des":"Please put the QR code in the center of the camera","previous":"Back","accept":"Accept"},"notice":{"notice_1":"Don\'t shoot too blurry","notice_2":"Don\'t take the shot off the angle","notice_3":"Do not take a blowout picture"},"choose_version_qr":{"choose_version":"CHOOSE VERSION","version_for_you":"Choose the version you want to experience","standard_version":"Standard version","use_qrcode":"The version uses QR Code to extract CCCD information","is_qrcode_scan":"Scan the QR Code"},"document_modal":{"tutorial_title":"Guideline for capturing your documents","tutorial_notice1":"Bring your document to the camera so that its four corners match with the restricted area","tutorial_notice2":"Capture information on document clearly and completely ","do_not":"Don\'t take","tutorial1":"too blurry","tutorial2":"take the shot off the angle","tutorial3":"glare"},"face_modal":{"tutorial_title":"Guideline for verifying document owner\'s face","tutorial_notice1":"Move the face to fit the restricted area","tutorial_notice2":"Keep your face steady when taking a photo","tutorial_notice3":" Avoid other people appearing in the camera while taking photos","do_not":"Don\'t take","tutorial1":"too blurry","tutorial2":"wear glasses","tutorial3":"glare"},"oval_face":{"tutorial_title":"Tutorial","tutorial_title2":"Guideline for capturing your documents","tutorial_title3":"Watch the video for an easier experience","tutorial_notice1":"Let the face fit small frame and large frame","tutorial_notice2":"Do not wear glasses, masks, do not take photos against the light"}}')
}
, function(e) {
    e.exports = JSON.parse('{"vi":{"title":"Tiêu đề"}}')
}
, function(e) {
    e.exports = JSON.parse('{"home":{"title":"CHỌN LOẠI GIẤY TỜ","cmt":"Chứng minh thư, Thẻ căn cước","passpost":"Hộ chiếu","cmt_army":"Chứng minh thư quân đội","license":"Bằng lái xe","cmt_chip":"Thẻ căn cước gắn chíp","start":"BẮT ĐẦU"},"face":{"portrait":"Chân dung","please":"Xin vui lòng","des_1":"Di chuyển khuôn mặt sao cho vừa với vùng giới hạn","take_photo":"Chụp ảnh","take_again":"Chụp lại","upload_photo":"Tải ảnh","next":"Tiếp theo","guide":"Hướng dẫn","guide_1":"Hướng dẫn Chụp ảnh Chân dung","guide_2":"Di chuyển khuôn mặt sao cho vừa với vùng giới hạn","guide_3":"Giữ nguyên khuôn mặt khi chụp ảnh","guide_4":"Hạn chế có người khác trong camera khi chụp","touch":"Chạm để chụp ảnh","guide_5":"Đặt giấy tờ nằm vừa khung hình chữ nhật,","guide_6":"chụp đủ ánh sáng và rõ nét","guide_7":"Di chuyển khuôn mặt sao cho vừa","guide_8":"với vùng giới hạn","guide_9":"Vui lòng tháo kính để xác thực chính xác hơn"},"front":{"qr":"QR code","front":"Mặt trước","back":"Mặt sau","result":"Kết quả","guide_1":"Hướng dẫn Chụp ảnh giấy tờ cầm tay","guide_2":"Đưa giấy tờ vào gần camera sao cho 4 góc của giấy tờ trùng với vùng giới hạn","guide_3":"Chụp rõ nét và đầy đủ thông tin trên giấy tờ","guide_4":"Đặt giấy tờ nằm vừa khung hình chữ nhật, chụp đủ ánh sáng và rõ nét","guide_5":"Chọn Chụp lại nếu ảnh mờ, không rõ nét","guide_6":"Chọn Tiếp theo để sang bước tiếp theo","guide_7":"Chọn “Tiếp theo” để sang bước tiếp theo","upload_image":"Tải ảnh lên","qr_des":"Xin vui lòng đưa mã QR code vào trung tâm của camera","previous":"Quay lại","accept":"Đồng ý"},"notice":{"notice_1":"Không chụp quá mờ","notice_2":"Không chụp mất góc","notice_3":"Không chụp lóa sáng"},"choose_version_qr":{"choose_version":"CHỌN PHIÊN BẢN","version_for_you":"Chọn phiên bản bạn muốn trải nghiệm","standard_version":"Phiên bản tiêu chuẩn","use_qrcode":"Phiên bản sử dụng QR Code để bóc tách thông tin CCCD","is_qrcode_scan":"Quét QR Code"},"document_modal":{"tutorial_title":"Hướng dẫn chụp ảnh giấy tờ cầm tay","tutorial_notice1":"Đưa giấy tờ vào gần camera sao cho 4 góc của giấy tờ trùng với vùng giới hạn","tutorial_notice2":"Chụp rõ nét và đầy đủ thông tin trên giấy tờ","do_not":"Không chụp","tutorial1":"quá mờ","tutorial2":"mất góc","tutorial3":"lóa sáng"},"face_modal":{"tutorial_title":"Hướng dẫn chụp ảnh chân dung","tutorial_notice1":"Di chuyển khuôn mặt sao cho vừa với vùng giới hạn","tutorial_notice2":"Giữ nguyên khuôn mặt khi chụp ảnh","tutorial_notice3":" Hạn chế có người khác trong camera khi chụp","do_not":"Không chụp","tutorial1":"quá mờ","tutorial2":"đeo kính","tutorial3":"lóa sáng"},"oval_face":{"tutorial_title":"Hướng dẫn","tutorial_title2":"Xác thực khuôn mặt chủ giấy tờ","tutorial_title3":"Xem video để trải nghiệm dễ dàng hơn","tutorial_notice1":"Để khuôn mặt vừa khung hình nhỏ và khung hình lớn ","tutorial_notice2":"Không đeo kính, khẩu trang, không chụp ngược sáng"}}')
}
, function(e, t, i) {
    "use strict";
    function n(e) {
        return "object" == typeof e ? "{}" === JSON.stringify(e) || "[]" === JSON.stringify(e) || !e : "string" == typeof e ? !e.trim() : void 0 === e
    }
    function a(e, t={}, i, a, o, c={}) {
        var l = new XMLHttpRequest
          , s = c.AUTHORIZION
          , d = c.TOKEN_ID
          , r = c.TOKEN_KEY;
        l.open("POST", e, !0),
        !n(t) && l.setRequestHeader(t.key, t.value),
        l.setRequestHeader("Authorization", "Bearer " + s),
        l.setRequestHeader("Token-id", d),
        l.setRequestHeader("Token-key", r),
        l.setRequestHeader("mac-address", "WEB-001"),
        l.onreadystatechange = function() {
            4 == l.readyState && (200 == l.status ? a(l.responseText) : o(l.responseText))
        }
        ,
        l.send(i)
    }
    function o(e) {
        var t = new Date(e)
          , i = "" + (t.getMonth() + 1)
          , n = "" + t.getDate()
          , a = t.getFullYear();
        return i.length < 2 && (i = "0" + i),
        n.length < 2 && (n = "0" + n),
        [a, i, n].join("-")
    }
    function c(e, t, i) {
        var n = {}
          , a = {}
          , c = {};
        n[piexif.ImageIFD.Make] = "wb",
        n[piexif.ImageIFD.XResolution] = [t, 1],
        n[piexif.ImageIFD.YResolution] = [i, 1],
        n[piexif.ImageIFD.Software] = "vnpt_ekyc",
        a[piexif.ExifIFD.DateTimeOriginal] = o(new Date),
        a[piexif.ExifIFD.LensMake] = "LensMake",
        a[piexif.ExifIFD.Sharpness] = 777,
        a[piexif.ExifIFD.LensSpecification] = [[1, 1], [1, 1], [1, 1], [1, 1]],
        c[piexif.GPSIFD.GPSVersionID] = [7, 7, 7, 7],
        c[piexif.GPSIFD.GPSDateStamp] = "1999:99:99 99:99:99";
        var l = {
            "0th": n,
            Exif: a,
            GPS: c
        }
          , s = piexif.dump(l);
        return piexif.insert(s, e)
    }
    function l(e, t) {
        var i = btoa(JSON.stringify(e))
          , n = CryptoJS.AES.encrypt(i, t).toString()
          , a = CryptoJS.AES.decrypt(n, t).toString(CryptoJS.enc.Utf8);
        JSON.parse(atob(a));
        return n
    }
    function s(e) {
        return decodeURIComponent(atob(e).split("").map((function(e) {
            return "%" + ("00" + e.charCodeAt(0).toString(16)).slice(-2)
        }
        )).join(""))
    }
    function d(e) {
        for (var t = atob(e.split(",")[1]), i = new ArrayBuffer(t.length), n = new Uint8Array(i), a = 0; a < t.length; a++)
            n[a] = t.charCodeAt(a);
        return new Blob([i],{
            type: "image/jpeg"
        })
    }
    function r() {
        let e = document.getElementById("ekyc-loading")
          , t = document.getElementById("step1-demo-ekyc");
        e && (e.style.display = "none"),
        t.parentNode.removeChild(t)
    }
    function v() {
        let e = document.getElementById("ekyc-loading");
        e && (e.style.display = "block")
    }
    i.r(t),
    i.d(t, "init", (function() {
        return $
    }
    )),
    i.d(t, "reload", (function() {
        return W
    }
    )),
    i.d(t, "viewResult", (function() {
        return q
    }
    )),
    i.d(t, "removeExistingItem", (function() {
        return K
    }
    ));
    function _(e, t) {
        t = t.toLowerCase();
        ["en", "vi"].includes(t) || (t = "vi");
        const n = i(1)(`./${t}.json`);
        for (var a = 0; a < e.length; a++)
            try {
                e[a].textContent = new Function("return this." + e[a].textContent.toLowerCase() + ";").call(n)
            } catch (t) {
                e[a].textContent = ""
            }
    }
    const p = e=>{
        let t = document.getElementById(e)
          , i = document.createElement("canvas")
          , n = null;
        return i.width = t.videoWidth,
        i.height = t.videoHeight,
        i.getContext("2d").drawImage(t, 0, 0, t.videoWidth, t.videoHeight),
        n = i.toDataURL("image/jpeg"),
        n
    }
    ;
    function u(e) {
        var t = new Date(e)
          , i = "" + (t.getMonth() + 1)
          , n = "" + t.getDate()
          , a = t.getFullYear();
        return i.length < 2 && (i = "0" + i),
        n.length < 2 && (n = "0" + n),
        [a, i, n].join("-")
    }
    function g(e) {
        for (var t = atob(e.split(",")[1]), i = new ArrayBuffer(t.length), n = new Uint8Array(i), a = 0; a < t.length; a++)
            n[a] = t.charCodeAt(a);
        return new Blob([i],{
            type: "image/jpeg"
        })
    }
    const m = (e,t)=>{
        try {
            var i = document.getElementById(e)
              , n = window.screen.width < window.outerWidth ? window.screen.width : window.outerWidth;
            navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
            var a = "environment"
              , o = {};
            if (n < 1024) {
                var c = window.innerWidth > 0 ? window.innerWidth : screen.width;
                o = {
                    audio: !1,
                    video: {
                        facingMode: a,
                        width: {
                            ideal: c / .75
                        },
                        height: {
                            ideal: c
                        },
                        frameRate: {
                            ideal: 30
                        }
                    }
                }
            } else
                o = {
                    audio: !1,
                    video: {
                        facingMode: a,
                        width: {
                            ideal: 640
                        },
                        height: {
                            ideal: 360
                        }
                    }
                };
            if (navigator.mediaDevices.getUserMedia) {
                const n = s("VnVpIGzDsm5nIGtp4buDbSB0cmEgY2FtZXJhIGPhu6dhIGLhuqFuIQ==")
                  , a = s("UGjDoXQgaGnhu4duIHdlYmNhbSDhuqNvLiBWdWkgbMOybmcga2nhu4NtIHRyYSBs4bqhaSBjYW1lcmEgY+G7p2EgYuG6oW4h")
                  , c = i.parentElement;
                navigator.mediaDevices.getUserMedia(o).then((async n=>{
                    let o = n.getVideoTracks()[0].label ? n.getVideoTracks()[0].label.toLowerCase() : "anonymous";
                    if (i.srcObject = n,
                    await (async(e,t)=>{
                        let i = !1;
                        for (let n = 0; n < t.length; n++)
                            e.includes(t[n]) && (i = !0);
                        return i
                    }
                    )(o, ["fake", "virtual", "many"]))
                        alert(a),
                        b(n),
                        location.reload();
                    else {
                        i.play(),
                        t(n);
                        let o = null
                          , l = null;
                        setTimeout((function() {
                            "block" == c.style.display && (o = p(e))
                        }
                        ), 3e3),
                        setTimeout((function() {
                            "block" == c.style.display && (l = p(e),
                            o === l && (alert(a),
                            b(n),
                            location.reload()))
                        }
                        ), 6e3)
                    }
                }
                )).catch((function(e) {
                    console.log("getUserMedia Error", e),
                    alert(n),
                    location.reload()
                }
                ))
            }
        } catch (e) {
            console.log("Webcam error", e)
        }
    }
    ;
    function y(e, t) {
        var i;
        return i = "<div class='webcame-zone' id='webcame-zone'><div id='wrapper-oval'><div id='notice-ani'><div id='notice-face'></div></div><video class='action-block' id='video' muted playsinline autoplay style='visibility: visible'></video><div id='animation'></div><img id='outPut' crossorigin='anonymous' ><div style='" + e.OTHER_CONFIG.description_oval + "'>" + e.OTHER_CONFIG.description_oval_content + "</div></div><div id='canvas-border'><canvas id='canvas' style='overflow:auto; display:none'></canvas></div></div>",
        function(e) {
            try {
                var t = window.screen.width < window.outerWidth ? window.screen.width : window.outerWidth;
                navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
                var i = "user"
                  , n = {};
                if (t < 1024) {
                    var a = window.innerWidth > 0 ? window.innerWidth : screen.width;
                    n = {
                        audio: !1,
                        video: {
                            facingMode: i,
                            width: {
                                ideal: a / .75
                            },
                            height: {
                                ideal: a
                            },
                            frameRate: {
                                ideal: 30
                            }
                        }
                    }
                } else
                    n = {
                        audio: !1,
                        video: {
                            facingMode: i,
                            width: {
                                ideal: 640
                            },
                            height: {
                                ideal: 360
                            }
                        }
                    };
                navigator.mediaDevices.getUserMedia && navigator.mediaDevices.getUserMedia(n).then((function(t) {
                    if (video.srcObject = t,
                    (t.getVideoTracks()[0].label ? t.getVideoTracks()[0].label.toLowerCase() : "anonymous").includes("fake")) {
                        let e = s("VnVpIGzDsm5nIGtp4buDbSB0cmEgY2FtZXJhIGPhu6dhIGLhuqFuICE=");
                        alert(e),
                        b(t),
                        location.reload()
                    } else
                        video.play(),
                        e(t)
                }
                )).catch((function(e) {
                    console.log("Something went wrong!", e);
                    let t = s("VnVpIGzDsm5nIGtp4buDbSB0cmEgY2FtZXJhIGPhu6dhIGLhuqFuICE=");
                    alert(t)
                }
                ))
            } catch (e) {
                console.log("err webcam", e)
            }
        }(t),
        i
    }
    function b(e) {
        for (let t = 0; t < e.length; t++) {
            e[t].getTracks().forEach((function(e) {
                "live" == e.readyState && e.stop()
            }
            ))
        }
    }
    var h = e=>{
        const t = `${e.MODAL_FACE_STYLE.face_icon}`;
        return `<div class="ekyc-popup" id="ekyc-popup-1" style="box-shadow: rgba(0, 0, 0, 0.06) 0px 0px 2px, rgba(0, 0, 0, 0.1) 0px 3px 8px;">\n      <div class="pu-header">\n        <img class="close-btn" id="close-pop-1" width="32px" height="32px" src=${`${e.MODAL_FACE_STYLE.close_icon}`} />\n        <div class="icons"><img class="main-icons" src=${t} /></div>\n        <div class="content" id="header-title-pop" style="color: rgb(200, 36, 45);"><var>FACE_MODAL.TUTORIAL_TITLE</var></div>\n      </div>\n      <div class="pu-body">\n        <ul>\n          <li><var>FACE_MODAL.TUTORIAL_NOTICE1</var></li>\n          <li><var>FACE_MODAL.TUTORIAL_NOTICE2</var></li>\n          <li><var>FACE_MODAL.TUTORIAL_NOTICE3</var></li>\n        </ul>\n      </div>\n      <div class="pu-footer">\n        <div class="text-center">\n          <img class="main-icons" src=${`${e.MODAL_FACE_STYLE.notice1_icon}`} />\n          <p>\n            <var>FACE_MODAL.DO_NOT</var>\n          </p>\n          <p>\n            <var>FACE_MODAL.TUTORIAL1</var>\n          </p>\n        </div>\n        <div class="text-center">\n          <img class="main-icons" src=${`${e.MODAL_FACE_STYLE.notice2_icon}`} />\n          <p>\n            <var>FACE_MODAL.DO_NOT</var>\n          </p>\n          <p>\n            <var>FACE_MODAL.TUTORIAL2</var>\n          </p>\n        </div>\n        <div class="text-center">\n          <img class="main-icons" src=${`${e.MODAL_FACE_STYLE.notice3_icon}`} />\n          <p>\n            <var>FACE_MODAL.DO_NOT</var>\n          </p>\n          <p>\n            <var>FACE_MODAL.TUTORIAL3</var>\n          </p>\n        </div>\n      </div>\n    </div>`.replace(/(\r\n|\n|\r)/gm, "")
    }
      , E = "https://sandbox-idg.vnpt.vn/";
    const f = (e,t,i)=>{
        let n = {};
        return n = {
            "Content-Type": "application/json",
            Authorization: "Bearer " + e,
            "Token-id": t,
            "Token-key": i,
            "mac-address": "WEB-001"
        },
        n
    }
    ;
    function k(e, t, i, n) {
        try {
            var o = (n.BACKEND_URL.length > 0 ? n.BACKEND_URL : E) + "file-service/v1/addFile"
              , c = new FormData;
            c.append("file\t", e.file),
            c.append("title\t", "upload_file"),
            c.append("description\t", "ic_upload_file"),
            a(o, {}, c, (i=>{
                t(JSON.parse(i), e)
            }
            ), (e=>{
                i(e)
            }
            ), n)
        } catch (e) {
            console.log("uploadImageErr", e)
        }
    }
    async function A(e, t) {
        let i = (t.BACKEND_URL.length > 0 ? t.BACKEND_URL : E) + "ai/v1/web/card/liveness";
        var n = {
            img: e.currentHash,
            client_session: "9fb8ee41-1b6d-45c9-9ff4-645bb269df7e-1566189277196",
            token: "ai/v1/web/card/liveness"
        }
          , a = t.AUTHORIZION
          , o = t.TOKEN_ID
          , c = t.TOKEN_KEY;
        return await fetch(i, {
            method: "POST",
            mode: "cors",
            credentials: "same-origin",
            headers: f(a, o, c),
            body: JSON.stringify(n)
        }).then((e=>e.json())).then((e=>e)).catch((e=>e))
    }
    async function T(e, t) {
        let i = (t.BACKEND_URL.length > 0 ? t.BACKEND_URL : E) + "ai/v1/web/face/liveness";
        var n = {
            img: e.hashFace,
            client_session: "9fb8ee41-1b6d-45c9-9ff4-645bb269df7e-1566189277196",
            token: "ai/v1/web/card/liveness"
        }
          , a = t.AUTHORIZION
          , o = t.TOKEN_ID
          , c = t.TOKEN_KEY;
        return await fetch(i, {
            method: "POST",
            mode: "cors",
            credentials: "same-origin",
            headers: f(a, o, c),
            body: JSON.stringify(n)
        }).then((e=>e.json())).then((e=>e)).catch((e=>e))
    }
    async function I(e, t) {
        var i = (t.BACKEND_URL.length > 0 ? t.BACKEND_URL : E) + "ai/v1/web/ocr/id/front"
          , n = {
            img_front: e.currentHash,
            client_session: "9fb8ee41-1b6d-45c9-9ff4-645bb269df7e-1566189277196",
            token: "e41-1b6d-45c9-9",
            type: e.typeDocument,
            crop_param: "0,0",
            validate_postcode: !0
        }
          , a = t.AUTHORIZION
          , o = t.TOKEN_ID
          , c = t.TOKEN_KEY;
        return await fetch(i, {
            method: "POST",
            mode: "cors",
            credentials: "same-origin",
            headers: f(a, o, c),
            body: JSON.stringify(n)
        }).then((e=>e.json())).then((e=>e)).catch((e=>e))
    }
    async function w(e, t) {
        var i = (t.BACKEND_URL.length > 0 ? t.BACKEND_URL : E) + "ai/v1/web/ocr/id"
          , n = {
            img_front: e.dataHash.hash0,
            img_back: e.dataHash.hash1,
            client_session: "9fb8ee41-1b6d-45c9-9ff4-645bb269df7e-1566189277196",
            token: "e41-1b6d-45c9-9",
            type: e.typeDocument,
            crop_param: "0,0",
            validate_postcode: !0
        }
          , a = t.AUTHORIZION
          , o = t.TOKEN_ID
          , c = t.TOKEN_KEY;
        return await fetch(i, {
            method: "POST",
            mode: "cors",
            credentials: "same-origin",
            headers: f(a, o, c),
            body: JSON.stringify(n)
        }).then((e=>e.json())).then((e=>e)).catch((e=>e))
    }
    async function C(e, t) {
        var i = (t.BACKEND_URL.length > 0 ? t.BACKEND_URL : E) + "ai/v1/web/face/mask"
          , n = {
            img: e.hashFace,
            face_bbox: null,
            face_lmark: null,
            client_session: "9fb8ee41-1b6d-45c9-9ff4-645bb269df7e-1566189277196"
        }
          , a = t.AUTHORIZION
          , o = t.TOKEN_ID
          , c = t.TOKEN_KEY;
        return await fetch(i, {
            method: "POST",
            mode: "cors",
            credentials: "same-origin",
            headers: f(a, o, c),
            body: JSON.stringify(n)
        }).then((e=>e.json())).then((e=>e)).catch((e=>e))
    }
    async function L(e, t) {
        var i = (t.BACKEND_URL.length > 0 ? t.BACKEND_URL : E) + "ai/v1/web/face/compare"
          , n = {
            img_front: e.hashFront,
            img_face: e.hashFace,
            client_session: "9fb8ee41-1b6d-45c9-9ff4-645bb269df7e-1566189277196",
            token: "/ai/v1/web/face/compare"
        }
          , a = t.AUTHORIZION
          , o = t.TOKEN_ID
          , c = t.TOKEN_KEY;
        return await fetch(i, {
            method: "POST",
            mode: "cors",
            credentials: "same-origin",
            headers: f(a, o, c),
            body: JSON.stringify(n)
        }).then((e=>e.json())).then((e=>e)).catch((e=>e))
    }
    var S = e=>`<div class="ekyc-loading" id="ekyc-loading" style="${e.OTHER_CONFIG.loading_styles}">\n    <img class="arc" src=${e.OTHER_CONFIG.loading_icon}></img>\n  </div>`.replace(/(\r\n|\n|\r)/gm, "");
    var O = (e,t,i,n)=>{
        var a = `<div class="capture-webcam-wrapper">\n      <div class="capture-webcam">\n        <p class="header-title" style="color:${t.CAPTURE_IMAGE_STYLE.big_title_color}"><var>FACE.PORTRAIT</var></p>\n        <div class="webcame-zone" id="wedatabcame-zone" >\n          <div class="video-block" id="video-block"><video class="action-block" id="video1" muted="" playsinline="" autoplay=""></video></div>\n          <div id="webcam-result">\n            <img id="img-result" />\n          </div>\n        </div>\n        <div class="ekyc_description" id="ekyc_description" style="display: block; color:${t.CAPTURE_IMAGE_STYLE.description1_color};">\n          <span><var>FACE.PLEASE</var></span><br />\n          <span><var>FACE.DES_1</var></span>\n        </div>\n\n        <div class="take-picture-btn" id="take-picture-webcam" style="display: flex; background: ${t.CAPTURE_IMAGE_STYLE.capture_btn_background};">\n          <img id="take-picture-webcam-img" class="camera-icon" src=${t.CAPTURE_IMAGE_STYLE.capture_btn_icon} />\n          <span class="title" id="take-picture-webcam-title"><var style="color: ${t.CAPTURE_IMAGE_STYLE.capture_btn_color}">FACE.TAKE_PHOTO</var></span>\n        </div>\n        \n        <div class="after-capture-wrapper" id="after-capture">\n          <div class="step1-after-capture">\n            <div class="re-capture" id="re-capture" style="background: ${t.CAPTURE_IMAGE_STYLE.recapture_btn_background}; border: ${t.CAPTURE_IMAGE_STYLE.recapture_btn_border}">\n              <img id="re-capture-icon" class="camera-icon" src=${t.CAPTURE_IMAGE_STYLE.recapture_btn_icon} />\n              <span id="re-capture-title"><var style="color: ${t.CAPTURE_IMAGE_STYLE.recapture_btn_color}">FACE.TAKE_AGAIN</var></span>\n            </div>\n            <div class="next-step" id="step1-next-step" style="background: ${t.CAPTURE_IMAGE_STYLE.nextstep_btn_background}; border: ${t.CAPTURE_IMAGE_STYLE.nextstep_btn_border} ">\n              <img id="step1-next-step-icon" class="next-icon" src=${t.CAPTURE_IMAGE_STYLE.nextstep_btn_icon} />\n              <span id="step1-next-step-title"><var style="color: ${t.CAPTURE_IMAGE_STYLE.nextstep_btn_color}">FACE.NEXT</var></span>\n            </div>\n          </div>\n        </div>\n        \n        ${S(t)}\n        <div class="tutorial-mobile"><a id="tutorial-mobile"><var>FACE.GUIDE</var></a></div>\n      </div>\n      <img id="tutorial_btn" class="tutorial_btn" src=${t.CAPTURE_IMAGE_STYLE.tutorial_btn_icon}>\n      ${h(t)}\n    </div>`;
        const o = document.getElementById("ekyc_sdk_intergrated");
        o.insertAdjacentHTML("beforeend", a.replace(/(\r\n|\n|\r)/gm, ""));
        _(o.getElementsByTagName("var"), t.LANGUAGE),
        m("video1", (e=>{
            j(e)
        }
        ));
        const c = window.screen.width < window.outerWidth ? window.screen.width : window.outerWidth;
        let l = document.getElementById("tutorial-mobile")
          , s = document.getElementById("tutorial_btn")
          , r = document.getElementById("close-pop-1")
          , v = document.getElementById("ekyc-popup-1")
          , p = document.getElementsByClassName("capture-webcam")[0]
          , u = document.getElementById("take-picture-webcam")
          , g = document.getElementById("video-block")
          , y = document.getElementById("img-result")
          , E = document.getElementById("after-capture")
          , f = document.getElementById("re-capture")
          , A = document.getElementById("webcam-result")
          , I = document.getElementById("step1-next-step")
          , w = {}
          , O = []
          , M = {}
          , R = document.getElementById("ekyc-loading");
        function N() {
            v.style.display = "block",
            p.style.display = "none",
            c > 1024 ? s.style.display = "none" : l.style.display = "none"
        }
        function U() {
            c > 1024 ? s.style.display = "block" : l.style.display = "block",
            v.style.display = "none",
            p.style.display = "block"
        }
        function j(e) {
            e && O.push(e)
        }
        w.type_document = e;
        function B(e) {
            M.hashFace = e.object.hash,
            R.style.display = "none"
        }
        function D(e) {
            console.log("uploadFileFail", e),
            R.style.display = "none"
        }
        u.onclick = ()=>{
            let e = document.getElementById("video1")
              , i = document.createElement("canvas")
              , n = null
              , a = null
              , o = {};
            i.width = e.videoWidth,
            i.height = e.videoHeight,
            i.getContext("2d").drawImage(e, 0, 0, e.videoWidth, e.videoHeight),
            n = i.toDataURL("image/jpeg"),
            y.src = n,
            a = d(n),
            o.file = a,
            g.style.display = "none",
            u.style.display = "none",
            E.style.display = "block",
            A.style.display = "block",
            R.style.display = "block",
            k(o, B, D, t),
            b(O),
            w.base64_face_img = {
                img_face_far: n
            }
        }
        ,
        f.onclick = ()=>{
            A.style.display = "none",
            E.style.display = "none",
            g.style.display = "block",
            u.style.display = "flex",
            m("video1", (e=>{
                j(e)
            }
            ))
        }
        ,
        I.onclick = async()=>{
            M.hashFront = localStorage.getItem("img_front_document") ? JSON.parse(localStorage.getItem("img_front_document")) : null,
            R.style.display = "block";
            let e = null
              , i = null
              , a = null;
            t.CHECK_LIVENESS_FACE && (e = await T(M, t),
            w.liveness_face = e),
            t.CHECK_MASKED_FACE && (i = await C(M, t),
            w.masked = i),
            t.COMPARE_FACE && (a = await L(M, t),
            w.compare = a),
            await n(w),
            await (async()=>{
                R.style.display = "none"
            }
            )()
        }
        ,
        r.onclick = function() {
            U()
        }
        ,
        s.onclick = function() {
            N()
        }
        ,
        l.onclick = function() {
            N()
        }
        ,
        t.SHOW_HELP ? N() : (U(),
        s.style.display = "none",
        l.style.display = "none")
    }
    ;
    var M = (e,t,i,n)=>{
        let a = `<div class="capture-and-upload-block-wrapper">\n      <div class="capture-and-upload-block">\n        <p class="header-title" style="color:${t.CAPTURE_IMAGE_STYLE.big_title_color}"><var>FACE.PORTRAIT</var></p>\n        <div class="capture-and-upload-wrapper" style="background-color: ${t.CAPTURE_IMAGE_STYLE.capture_and_upload_wrapper_bg}">\n          <div class="capture-and-upload-wrapper-body" style="background-image: url(${t.CAPTURE_IMAGE_STYLE.capture_and_upload_wrapper_bg_img})">\n            <div class="btn-wrapper">\n              <div id="upload-image-web" class="upload-btn-wrapper">\n                <button class="btn btn-upload-image" style="border: ${t.CAPTURE_IMAGE_STYLE.upload_btn_boder};background-color: ${t.CAPTURE_IMAGE_STYLE.upload_btn_background}">\n                  <img alt="active" src=${t.CAPTURE_IMAGE_STYLE.upload_btn_icon} />\n                  <span style="color: ${t.CAPTURE_IMAGE_STYLE.upload_btn_color}"><var>FRONT.UPLOAD_IMAGE</var></span>\n                </button>\n                <input accept="image/*" id="fileInputWeb10" name="img-id" type="file" />\n              </div>\n            </div>\n\n            <div class="camera_result" id="results_front_camera">\n              <img id="img-result"/>\n              <div class="action-wrapper">\n                <div id="upload-image-web" class="upload-btn-wrapper">\n                  <button class="btn btn-upload-image" style="border: ${t.CAPTURE_IMAGE_STYLE.upload_btn_boder};background-color: ${t.CAPTURE_IMAGE_STYLE.upload_btn_background}">\n                    <img alt="active" src=${t.CAPTURE_IMAGE_STYLE.upload_btn_icon} />\n                    <span style="color: ${t.CAPTURE_IMAGE_STYLE.upload_btn_color}"><var>FRONT.UPLOAD_IMAGE</var></span>\n                  </button>\n                  <input accept="image/*" id="fileInputWeb12" name="img-id" type="file" />\n                </div>\n            </div>\n            </div>\n          </div>\n        </div>\n\n        <div class="ekyc_description" id="ekyc_description" style="display: block; color:${t.CAPTURE_IMAGE_STYLE.description1_color};">\n          <span><var>FACE.PLEASE</var></span><br />\n          <span><var>FACE.DES_1</var></span>\n        </div>\n\n        <div class="common-btn" id="next-step-btn" style="background-color: ${t.CAPTURE_IMAGE_STYLE.nextstep_btn_background}">\n          <img class="next-icon" src=${t.CAPTURE_IMAGE_STYLE.nextstep_btn_icon} />\n          <span class="title" id="take-picture-step1-title" style="color: ${t.CAPTURE_IMAGE_STYLE.upload_btn_color}"><var>FACE.NEXT</var></span>\n        </div>\n        ${S(t)}\n        <div class="tutorial-mobile"><a id="tutorial-mobile"><var>FACE.GUIDE</var></a></div>\n      </div>\n      <img id="tutorial_btn" class="tutorial_btn" src=${t.CAPTURE_IMAGE_STYLE.tutorial_btn_icon}>\n      ${h(t)}\n    </div>`;
        const o = document.getElementById("ekyc_sdk_intergrated");
        o.insertAdjacentHTML("beforeend", a.replace(/(\r\n|\n|\r)/gm, ""));
        _(o.getElementsByTagName("var"), t.LANGUAGE);
        const c = window.screen.width < window.outerWidth ? window.screen.width : window.outerWidth;
        let l = document.getElementById("img-result")
          , s = document.getElementsByClassName("btn-wrapper")[0]
          , r = document.getElementById("next-step-btn")
          , v = document.getElementById("close-pop-1")
          , p = document.getElementById("tutorial-mobile")
          , u = document.getElementById("tutorial_btn")
          , g = document.getElementById("ekyc-popup-1")
          , m = document.getElementsByClassName("capture-and-upload-block")[0]
          , y = document.getElementById("ekyc-loading")
          , b = document.getElementById("results_front_camera")
          , E = {}
          , f = {};
        function A() {
            g.style.display = "block",
            m.style.display = "none",
            c > 1024 ? u.style.display = "none" : p.style.display = "none"
        }
        function I() {
            c > 1024 ? u.style.display = "block" : p.style.display = "block",
            g.style.display = "none",
            m.style.display = "block"
        }
        E.type_document = e;
        const w = e=>{
            f.hashFace = e.object.hash,
            y.style.display = "none"
        }
          , O = e=>{
            y.style.display = "none",
            console.log("uploadFileFail", e)
        }
          , M = e=>{
            var i, n = {};
            s.style.display = "none",
            b.style.display = "block",
            l.src = e.target.result,
            y.style.display = "block",
            R(),
            i = d(e.target.result),
            n.file = i,
            E.base64_face_img = {
                img_face_far: e.target.result
            },
            k(n, w, O, t)
        }
          , R = ()=>{
            r.style.display = "flex"
        }
        ;
        document.getElementById("fileInputWeb10").onchange = function() {
            let e = this.value
              , t = /(\.jpg|\.jpeg|\.png|\.gif)$/i
              , i = new FileReader
              , n = this.files[0];
            i.onloadend = i=>{
                if (!n || !t.exec(e))
                    return alert("Please upload file image only!"),
                    this.value = "",
                    !1;
                M(i)
            }
            ,
            i.readAsDataURL(n)
        }
        ,
        document.getElementById("fileInputWeb12").onchange = function() {
            let e = this.value
              , t = /(\.jpg|\.jpeg|\.png|\.gif)$/i
              , i = new FileReader
              , n = this.files[0];
            i.onloadend = i=>{
                if (!n || !t.exec(e))
                    return alert("Please upload file image only!"),
                    this.value = "",
                    !1;
                M(i)
            }
            ,
            i.readAsDataURL(n)
        }
        ,
        r.onclick = async()=>{
            f.hashFront = localStorage.getItem("img_front_document") ? JSON.parse(localStorage.getItem("img_front_document")) : null,
            y.style.display = "block";
            let e = null
              , i = null
              , a = null;
            t.CHECK_LIVENESS_FACE && (e = await T(f, t),
            E.liveness_face = e),
            t.CHECK_MASKED_FACE && (i = await C(f, t),
            E.masked = i),
            t.COMPARE_FACE && (a = await L(f, t),
            E.compare = a),
            await n(E),
            await (async()=>{
                y.style.display = "none"
            }
            )()
        }
        ,
        v.onclick = function() {
            I()
        }
        ,
        u.onclick = function() {
            A()
        }
        ,
        p.onclick = function() {
            A()
        }
        ,
        t.SHOW_HELP ? A() : (I(),
        u.style.display = "none",
        p.style.display = "none")
    }
    ;
    var R = (e,t,i,n)=>{
        let a = `<div class="capture-and-upload-block-wrapper">\n    <div class="capture-and-upload-block">\n      <p class="header-title" style="color:${t.CAPTURE_IMAGE_STYLE.big_title_color}"><var>FACE.PORTRAIT</var></p>\n      <div class="capture-and-upload-wrapper" style="background-color: ${t.CAPTURE_IMAGE_STYLE.capture_and_upload_wrapper_bg}">\n        <div class="capture-and-upload-wrapper-body" style="background-image: url(${t.CAPTURE_IMAGE_STYLE.capture_and_upload_wrapper_bg_img})">\n          <div class="btn-wrapper">\n            <div class="common-btn" id="capture-btn-id" style="display: flex; background: ${t.CAPTURE_IMAGE_STYLE.capture_btn_background};">\n              <img id="take-picture-step1-img" class="camera-icon"  src="${t.CAPTURE_IMAGE_STYLE.capture_btn_icon}" />\n              <span class="title" id="take-picture-step1-title" style="color: ${t.CAPTURE_IMAGE_STYLE.capture_btn_color};"><var>FACE.TAKE_PHOTO</var></span>\n            </div>\n            <div id="upload-image-web" class="upload-btn-wrapper">\n              <button class="btn btn-upload-image" style="border: ${t.CAPTURE_IMAGE_STYLE.upload_btn_boder};background-color: ${t.CAPTURE_IMAGE_STYLE.upload_btn_background}">\n                <img alt="active" src=${t.CAPTURE_IMAGE_STYLE.upload_btn_icon} />\n                <span style="color: ${t.CAPTURE_IMAGE_STYLE.upload_btn_color}"><var>FRONT.UPLOAD_IMAGE</var></span>\n              </button>\n              <input accept="image/*" id="fileInputWeb10" name="img-id" type="file" />\n            </div>\n          </div>\n    \n          <div class="camera_attach" id="front_camera">\n            <video id="camera_attach_video" width="100%" muted="" playsinline="" class="video-stream" src=""></video>\n            <div class="action-wrapper">\n              <div class="common-btn" id="caputure-in-video" style="display: flex; background: ${t.CAPTURE_IMAGE_STYLE.capture_btn_background};">\n                <img id="take-picture-step1-img" class="camera-icon" src="${t.CAPTURE_IMAGE_STYLE.capture_btn_icon}" />\n                <span class="title" id="take-picture-step1-title" style="color: ${t.CAPTURE_IMAGE_STYLE.capture_btn_color};"><var>FACE.TAKE_PHOTO</var></span>\n              </div>\n              <div id="upload-image-web" class="upload-btn-wrapper">\n                <button class="btn btn-upload-image" style="border: ${t.CAPTURE_IMAGE_STYLE.upload_btn_boder};background-color: ${t.CAPTURE_IMAGE_STYLE.upload_btn_background}">\n                  <img alt="active" src=${t.CAPTURE_IMAGE_STYLE.upload_btn_icon} />\n                  <span style="color: ${t.CAPTURE_IMAGE_STYLE.upload_btn_color}"><var>FRONT.UPLOAD_IMAGE</var></span>\n                </button>\n                <input accept="image/*" id="fileInputWeb11" name="img-id" type="file" />\n              </div>\n            </div>\n          </div>\n    \n          <div class="camera_result" id="results_front_camera">\n            <img id="img-result"/>\n            <div class="action-wrapper">\n              <div class="common-btn" id="re-caputure-in-video" style="display: flex; background: ${t.CAPTURE_IMAGE_STYLE.capture_btn_background};">\n                <img id="take-picture-step1-img" class="camera-icon" src="${t.CAPTURE_IMAGE_STYLE.capture_btn_icon}" />\n                <span class="title" id="take-picture-step1-title" style="color: ${t.CAPTURE_IMAGE_STYLE.capture_btn_color};"><var>FACE.TAKE_AGAIN</var></span>\n              </div>\n              <div id="upload-image-web" class="upload-btn-wrapper">\n                <button class="btn btn-upload-image" style="border: ${t.CAPTURE_IMAGE_STYLE.upload_btn_boder};background-color: ${t.CAPTURE_IMAGE_STYLE.upload_btn_background}">\n                  <img alt="active" src=${t.CAPTURE_IMAGE_STYLE.upload_btn_icon} />\n                  <span style="color: ${t.CAPTURE_IMAGE_STYLE.upload_btn_color}"><var>FRONT.UPLOAD_IMAGE</var></span>\n                </button>\n                <input accept="image/*" id="fileInputWeb12" name="img-id" type="file" />\n              </div>\n          </div>\n          </div>\n        </div>\n      </div>\n    \n      <div class="ekyc_description" id="ekyc_description" style="display: block; color:${t.CAPTURE_IMAGE_STYLE.description1_color};">\n        <span><var>FACE.PLEASE</var></span><br />\n        <span><var>FACE.DES_1</var></span>\n      </div>\n    \n      <div class="common-btn" id="next-step-btn" style="background-color: ${t.CAPTURE_IMAGE_STYLE.nextstep_btn_background}>\n        <img class="next-icon" src=${t.CAPTURE_IMAGE_STYLE.nextstep_btn_icon} />\n        <span class="title" id="take-picture-step1-title" style="color: ${t.CAPTURE_IMAGE_STYLE.upload_btn_color}"><var>FACE.NEXT</var></span>\n      </div>\n      ${S(t)}\n      <div class="tutorial-mobile"><a id="tutorial-mobile"><var>FACE.GUIDE</var></a></div>\n    </div>\n    <img id="tutorial_btn" class="tutorial_btn" src=${t.CAPTURE_IMAGE_STYLE.tutorial_btn_icon}>\n    ${h(t)}\n    </div>`;
        const o = document.getElementById("ekyc_sdk_intergrated");
        o.insertAdjacentHTML("beforeend", a.replace(/(\r\n|\n|\r)/gm, ""));
        _(o.getElementsByTagName("var"), t.LANGUAGE);
        const c = window.screen.width < window.outerWidth ? window.screen.width : window.outerWidth;
        let l = document.getElementById("tutorial-mobile")
          , s = document.getElementById("tutorial_btn")
          , r = document.getElementById("close-pop-1")
          , v = document.getElementById("ekyc-popup-1")
          , p = document.getElementsByClassName("capture-and-upload-block")[0]
          , u = document.getElementById("ekyc-loading")
          , g = document.getElementById("front_camera")
          , y = document.getElementById("results_front_camera")
          , E = document.getElementById("img-result")
          , f = document.getElementsByClassName("btn-wrapper")[0]
          , A = document.getElementById("next-step-btn")
          , I = {}
          , w = []
          , O = {};
        function M() {
            v.style.display = "block",
            p.style.display = "none",
            c > 1024 ? s.style.display = "none" : l.style.display = "none"
        }
        function R() {
            c > 1024 ? s.style.display = "block" : l.style.display = "block",
            v.style.display = "none",
            p.style.display = "block"
        }
        function N(e) {
            e && w.push(e)
        }
        I.type_document = e;
        const U = e=>{
            O.hashFace = e.object.hash,
            u.style.display = "none"
        }
          , j = e=>{
            u.style.display = "none",
            console.log("uploadFileFail", e)
        }
          , B = e=>{
            let i = null
              , n = {};
            f.style.display = "none",
            g.style.display = "block",
            g.style.display = "none",
            y.style.display = "block",
            E.src = e.target.result,
            u.style.display = "block",
            D(),
            w.length > 0 && b(w),
            i = d(e.target.result),
            n.file = i,
            I.base64_face_img = {
                img_face_far: e.target.result
            },
            k(n, U, j, t)
        }
          , D = ()=>{
            A.style.display = "flex"
        }
        ;
        document.getElementById("capture-btn-id").onclick = function() {
            f.style.display = "none",
            g.style.display = "block",
            u.style.display = "block",
            m("camera_attach_video", (e=>{
                N(e),
                e && (u.style.display = "none")
            }
            ))
        }
        ,
        document.getElementById("caputure-in-video").onclick = function() {
            let e = document.getElementById("camera_attach_video")
              , i = document.createElement("canvas")
              , n = null
              , a = null
              , o = {};
            i.width = e.videoWidth,
            i.height = e.videoHeight,
            i.getContext("2d").drawImage(e, 0, 0, e.videoWidth, e.videoHeight),
            n = i.toDataURL("image/jpeg"),
            E.src = n,
            a = d(n),
            o.file = a,
            g.style.display = "none",
            y.style.display = "block",
            u.style.display = "block",
            D(),
            b(w),
            I.base64_face_img = {
                img_face_far: n
            },
            k(o, U, j, t)
        }
        ,
        document.getElementById("re-caputure-in-video").onclick = function() {
            y.style.display = "none",
            g.style.display = "block",
            A.style.display = "none",
            u.style.display = "block",
            m("camera_attach_video", (e=>{
                e && (u.style.display = "none"),
                N(e)
            }
            ))
        }
        ,
        document.getElementById("fileInputWeb10").onchange = function() {
            let e = this.value
              , t = /(\.jpg|\.jpeg|\.png|\.gif)$/i
              , i = new FileReader
              , n = this.files[0];
            i.onloadend = i=>{
                if (!n || !t.exec(e))
                    return alert("Please upload file image only."),
                    this.value = "",
                    !1;
                B(i)
            }
            ,
            i.readAsDataURL(n)
        }
        ,
        document.getElementById("fileInputWeb11").onchange = function() {
            let e = this.value
              , t = /(\.jpg|\.jpeg|\.png|\.gif)$/i
              , i = new FileReader
              , n = this.files[0];
            i.onloadend = i=>{
                if (!n || !t.exec(e))
                    return alert("Please upload file image only."),
                    this.value = "",
                    !1;
                B(i)
            }
            ,
            i.readAsDataURL(n)
        }
        ,
        document.getElementById("fileInputWeb12").onchange = function() {
            let e = this.value
              , t = /(\.jpg|\.jpeg|\.png|\.gif)$/i
              , i = new FileReader
              , n = this.files[0];
            i.onloadend = i=>{
                if (!n || !t.exec(e))
                    return alert("Please upload file image only."),
                    this.value = "",
                    !1;
                B(i)
            }
            ,
            i.readAsDataURL(n)
        }
        ,
        A.onclick = async()=>{
            O.hashFront = localStorage.getItem("img_front_document") ? JSON.parse(localStorage.getItem("img_front_document")) : null,
            u.style.display = "block";
            let e = null
              , i = null
              , a = null;
            t.CHECK_LIVENESS_FACE && (e = await T(O, t),
            I.liveness_face = e),
            t.CHECK_MASKED_FACE && (i = await C(O, t),
            I.masked = i),
            t.COMPARE_FACE && (a = await L(O, t),
            I.compare = a),
            await n(I),
            await (async()=>{
                u.style.display = "none"
            }
            )()
        }
        ,
        r.onclick = function() {
            R()
        }
        ,
        s.onclick = function() {
            M()
        }
        ,
        l.onclick = function() {
            M()
        }
        ,
        t.SHOW_HELP ? M() : (R(),
        s.style.display = "none",
        l.style.display = "none")
    }
    ;
    var N = function(e, t, i, n) {
        let a = {};
        const o = window.screen.width < window.outerWidth ? window.screen.width : window.outerWidth;
        function c() {
            const e = document.getElementsByClassName("capture-and-upload-block-wrapper")[0];
            e.parentNode.removeChild(e)
        }
        function l(e) {
            a = e,
            i(a),
            n && n(a)
        }
        if (t.USE_WEBCAM && t.USE_UPLOAD)
            if (o > 1024) {
                R(e, t, "face", (e=>{
                    c(),
                    l(e)
                }
                ))
            } else {
                M(e, t, "face", (e=>{
                    c(),
                    l(e)
                }
                ))
            }
        if (t.USE_WEBCAM && !t.USE_UPLOAD) {
            O(e, t, "face", (e=>{
                var t;
                (t = document.getElementsByClassName("capture-webcam-wrapper")[0]) && t.parentNode.removeChild(t),
                l(e)
            }
            ))
        }
        if (!t.USE_WEBCAM && t.USE_UPLOAD) {
            M(e, t, "face", (e=>{
                c(),
                l(e)
            }
            ))
        }
    };
    function U(e, t, i, n) {
        var o = null
          , s = document.getElementById("vnpt_ekyc")
          , p = []
          , m = "<div class='step1-demo-ekyc' id='step1-demo-ekyc'><div class='header-title'id='header-title' style='color: " + t.OTHER_CONFIG.oval_title_color + "'><var>FACE.PORTRAIT</var></div>" + y(t, (function(e) {
            e && p.push(e)
        }
        )) + S(t) + "</div>"
          , h = {
            type_document: e
        }
          , f = {}
          , A = t.OTHER_CONFIG.oval_web
          , T = t.OTHER_CONFIG.oval_mobile
          , I = t.OTHER_CONFIG.notice_ani;
        async function w(e, t) {
            return new Promise((function(i) {
                var n = document.getElementById("video")
                  , a = document.createElement("canvas");
                if (n) {
                    a.width = n.videoWidth * e,
                    a.height = n.videoHeight * t,
                    (new Image).crossOrigin = "anonymous";
                    let o = (1 - e) / 2 * n.videoWidth
                      , c = (1 - t) / 2 * n.videoHeight
                      , l = n.videoWidth * e
                      , s = n.videoHeight
                      , d = 0
                      , r = 0
                      , v = n.videoWidth * e
                      , _ = n.videoHeight;
                    l < 0 && (o += l,
                    l = Math.abs(l)),
                    s < 0 && (c += s,
                    s = Math.abs(s)),
                    v < 0 && (d += v,
                    v = Math.abs(v)),
                    _ < 0 && (r += _,
                    _ = Math.abs(_));
                    const p = Math.max(o, 0)
                      , u = Math.min(o + l, n.videoWidth)
                      , g = Math.max(c, 0)
                      , m = Math.min(c + s, n.videoHeight)
                      , y = v / l
                      , b = _ / s;
                    a.getContext("2d").drawImage(n, p, g, u - p, m - g, o < 0 ? d - o * y : d, c < 0 ? r - c * b : r, (u - p) * y, (m - g) * b),
                    i(a)
                }
            }
            ))
        }
        var C = !0
          , L = 0
          , O = "FAR"
          , M = {
            far_img: null,
            near_img: null
        };
        async function R() {
            var e, s, _, m, y, A, T = "FIT", I = "TIME_EXCEED", S = "vi" == t.LANGUAGE ? "Đảm bảo khuôn mặt vừa khung hình" : "Make sure the face fits in the frame", N = "vi" == t.LANGUAGE ? "Có lỗi xảy tra trong quá trình liveness" : "An error occurred during liveness", U = {
                FIT: "vi" == t.LANGUAGE ? "Giữ vững khuôn mặt" : "Keep your face steady",
                TO_THE_RIGHT: S,
                TO_THE_LEFT: S,
                TO_THE_BOTTOM: S,
                TO_THE_TOP: S,
                NOT_STRAIGHT: S,
                TOO_FAR: "vi" == t.LANGUAGE ? "Gần hơn nữa" : "A little closer",
                TOO_NEAR: "vi" == t.LANGUAGE ? "Xa hơn nữa" : "A little further",
                INVALID: S,
                NO_FACE: S,
                TIME_EXCEED: N,
                "Library not loaded": N,
                "Image format error": S
            };
            if (C) {
                let S = null
                  , N = null;
                var j = 0;
                if ((window.screen.width < window.outerWidth ? window.screen.width : window.outerWidth) < 1024 ? ("FAR" == O && (j = .6 * 1.5 * .75,
                S = await w(j, .6)),
                "NEAR" == O && (j = 1.35,
                S = await w(j, 1)),
                N = await FaceVNPTBrowserSDK.processFace(S, 2)) : ("FAR" == O && (S = await w(.4, .65)),
                "NEAR" == O && (S = await w(.5, 1)),
                N = await FaceVNPTBrowserSDK.processFace(S, 1)),
                document.getElementById("notice-face").innerHTML = U[N],
                setTimeout((()=>{
                    requestAnimationFrame(R)
                }
                ), 350),
                N === T ? L++ : N === I ? (v(),
                FaceVNPTBrowserSDK.free(),
                setTimeout((function() {
                    r(),
                    b(p),
                    h.liveness_face = {
                        object: {},
                        message: "liveness face error by TIME_EXCEED"
                    },
                    i(h),
                    n && n(h)
                }
                ), 2e3)) : L = 0,
                L > 2 && "FAR" === O) {
                    FaceVNPTBrowserSDK.notifyCapture(),
                    o.playSegments([0, 100], !0),
                    L = 0,
                    O = "NEAR",
                    C = !1;
                    let e = await w(1, 1)
                      , i = {
                        file: d(e.toDataURL())
                    };
                    function n(e) {
                        if (M.far_img = e.object.hash,
                        t.COMPARE_FACE) {
                            let i = {}
                              , n = {};
                            i.hashFront = localStorage.getItem("img_front_document") ? JSON.parse(localStorage.getItem("img_front_document")) : null,
                            i.hashFace = e.object.hash,
                            n.dataHash = i,
                            function(e, t, i, n) {
                                try {
                                    var o = (n.BACKEND_URL.length > 0 ? n.BACKEND_URL : E) + "ai/v1/web/face/compare"
                                      , c = {
                                        img_front: e.dataHash.hashFront,
                                        img_face: e.dataHash.hashFace,
                                        client_session: "9fb8ee41-1b6d-45c9-9ff4-645bb269df7e-1566189277196",
                                        token: "/ai/v1/web/face/compare"
                                    };
                                    a(o, {
                                        key: "Content-Type",
                                        value: "application/json"
                                    }, JSON.stringify(c), (e=>{
                                        t(JSON.parse(e))
                                    }
                                    ), (e=>{
                                        i(e)
                                    }
                                    ), n)
                                } catch (e) {
                                    console.log("compareFaceWebErr", e)
                                }
                            }(n, (e=>{
                                h.compare = e
                            }
                            ), (e=>{
                                h.compare = JSON.parse(e)
                            }
                            ), t)
                        }
                        if (t.CHECK_MASKED_FACE) {
                            let i = {};
                            i.hashFace = e.object.hash,
                            function(e, t, i, n) {
                                try {
                                    var o = (n.BACKEND_URL.length > 0 ? n.BACKEND_URL : E) + "ai/v1/web/face/mask"
                                      , c = {
                                        img: e.hashFace,
                                        face_bbox: null,
                                        face_lmark: null,
                                        client_session: "9fb8ee41-1b6d-45c9-9ff4-645bb269df7e-1566189277196"
                                    };
                                    a(o, {
                                        key: "Content-Type",
                                        value: "application/json"
                                    }, JSON.stringify(c), (e=>{
                                        t(JSON.parse(e))
                                    }
                                    ), (e=>{
                                        i(e)
                                    }
                                    ), n)
                                } catch (e) {
                                    console.log("maskedFaceWebErr", e)
                                }
                            }(i, (e=>{
                                h.masked = e
                            }
                            ), (e=>{
                                h.masked = JSON.parse(e)
                            }
                            ), t)
                        }
                    }
                    f.img_face_far = e.toDataURL(),
                    h.base64_face_img = f,
                    k(i, n, (e=>{
                        console.log("loi upload file img_far", e)
                    }
                    ), t),
                    setTimeout((()=>{
                        C = !0,
                        R()
                    }
                    ), 3e3)
                }
                if (L > 2 && "NEAR" === O) {
                    FaceVNPTBrowserSDK.notifyCapture();
                    let d = FaceVNPTBrowserSDK.getResult()
                      , T = {
                        file: new Blob([d],{
                            type: "text"
                        })
                    };
                    FaceVNPTBrowserSDK.free(),
                    C = !1,
                    o.playSegments([120, 180], !0);
                    let I = await w(1, 1)
                      , L = (e = I.width,
                    s = I.height,
                    _ = I.toDataURL("image/jpeg"),
                    m = c(_, y = e, A = s),
                    document.getElementById("canvas-border").style.height = A + "px",
                    {
                        im_w: y,
                        optimizer: l({
                            image_type: "jpeg",
                            width: y,
                            height: A,
                            brand: "wb",
                            date_taken: u(new Date),
                            soft_ware: "vnpt_ekyc"
                        }, "3cb7ecbd-2343-4272-b2f1-cdb12983ecc0"),
                        current_height: A,
                        file: g(m),
                        image_base64: m
                    });
                    function S(e) {
                        setTimeout((function() {
                            r(),
                            b(p),
                            h.liveness_face = e,
                            i(h),
                            n && n(h)
                        }
                        ), 2e3)
                    }
                    function O(e) {
                        setTimeout((function() {
                            r(),
                            b(p),
                            h.liveness_face = JSON.parse(e),
                            i(h),
                            n && n(h)
                        }
                        ), 2e3)
                    }
                    f.img_face_near = I.toDataURL(),
                    h.base64_face_img = f,
                    v(),
                    k(T, (e=>{
                        k(L, (function(o) {
                            M.near_img = o.object.hash,
                            M.scan3d = e.object.hash,
                            t.CHECK_LIVENESS_FACE ? function(e, t, i, n) {
                                try {
                                    var o = (n.BACKEND_URL.length > 0 ? n.BACKEND_URL : E) + "ai/v1/web/face/liveness-3d"
                                      , c = {
                                        far_img: e.far_img,
                                        near_img: e.near_img,
                                        scan3d: e.scan3d,
                                        token: "sdk-web-e41-1b6d-45c9-9",
                                        client_session: "web-ic-vnpt"
                                    };
                                    a(o, {
                                        key: "Content-Type",
                                        value: "application/json"
                                    }, JSON.stringify(c), (e=>{
                                        t(JSON.parse(e))
                                    }
                                    ), (e=>{
                                        i(e)
                                    }
                                    ), n)
                                } catch (e) {}
                            }(M, S, O, t) : setTimeout((function() {
                                r(),
                                b(p),
                                i(h),
                                n && n(h)
                            }
                            ), 2e3)
                        }
                        ), (e=>{
                            r(),
                            console.log("loi upload file img_near", e)
                        }
                        ), t)
                    }
                    ), (e=>{
                        console.log("loi upload file 3dmask", e)
                    }
                    ), t)
                }
            }
        }
        (async()=>{
            await (async()=>{
                s.insertAdjacentHTML("beforeend", m),
                _(document.getElementById("step1-demo-ekyc").getElementsByTagName("var"), t.LANGUAGE)
            }
            )(),
            await (async()=>{
                (window.screen.width < window.outerWidth ? window.screen.width : window.outerWidth) < 1024 ? o = bodymovin.loadAnimation({
                    container: document.getElementById("animation"),
                    path: T,
                    renderer: "svg",
                    loop: !1,
                    autoplay: !1,
                    name: "oval",
                    rendererSettings: {
                        progressiveLoad: !0
                    }
                }) : (document.getElementById("video").style.width = "640px",
                document.getElementById("video").style.height = "360px",
                o = bodymovin.loadAnimation({
                    container: document.getElementById("animation"),
                    path: A,
                    renderer: "svg",
                    loop: !1,
                    autoplay: !1,
                    name: "oval"
                })),
                bodymovin.loadAnimation({
                    container: document.getElementById("notice-ani"),
                    path: I,
                    renderer: "svg",
                    loop: !0,
                    autoplay: !0,
                    name: "caution"
                })
            }
            )(),
            await FaceVNPTBrowserSDK.init(),
            await R()
        }
        )()
    }
    var j = e=>{
        const t = `${e.MODAL_DOC_STYLE.touch_icon}`;
        return `<div class="ekyc-popup" id="ekyc-popup-1" style="box-shadow: rgba(0, 0, 0, 0.06) 0px 0px 2px, rgba(0, 0, 0, 0.1) 0px 3px 8px;">\n      <div class="pu-header">\n        <img class="close-btn" id="close-pop-1" width="32px" height="32px" src=${`${e.MODAL_DOC_STYLE.close_icon}`} />\n        <div class="icons"><img class="main-icons" src=${t} /></div>\n        <div class="content" id="header-title-pop" style="color: rgb(200, 36, 45);"><var>DOCUMENT_MODAL.TUTORIAL_TITLE</var></div>\n      </div>\n      <div class="pu-body">\n        <ul>\n          <li><var>DOCUMENT_MODAL.TUTORIAL_NOTICE1</var></li>\n          <li><var>DOCUMENT_MODAL.TUTORIAL_NOTICE2</var></li>\n        </ul>\n      </div>\n      <div class="pu-footer">\n        <div class="text-center">\n          <img class="main-icons" src=${`${e.MODAL_DOC_STYLE.notice1_icon}`} />\n          <p>\n            <var>DOCUMENT_MODAL.DO_NOT</var>\n          </p>\n          <p>\n            <var>DOCUMENT_MODAL.TUTORIAL1</var>\n          </p>\n        </div>\n        <div class="text-center">\n          <img class="main-icons" src=${`${e.MODAL_DOC_STYLE.notice2_icon}`} />\n          <p>\n            <var>DOCUMENT_MODAL.DO_NOT</var>\n          </p>\n          <p>\n            <var>DOCUMENT_MODAL.TUTORIAL2</var>\n          </p>\n        </div>\n        <div class="text-center">\n          <img class="main-icons" src=${`${e.MODAL_DOC_STYLE.notice3_icon}`} />\n          <p>\n            <var>DOCUMENT_MODAL.DO_NOT</var>\n          </p>\n          <p>\n            <var>DOCUMENT_MODAL.TUTORIAL3</var>\n          </p>\n        </div>\n      </div>\n    </div>`.replace(/(\r\n|\n|\r)/gm, "")
    }
    ;
    var B = (e,t,i,n)=>{
        let a = `<div class="capture-and-upload-block-wrapper">\n      <div class="capture-and-upload-block">\n        <p class="header-title" style="color:${t.CAPTURE_IMAGE_STYLE.big_title_color}"><var>${"front" == i ? "FRONT.FRONT" : "FRONT.BACK"}</var></p>\n        <div class="capture-and-upload-wrapper" style="background-color: ${t.CAPTURE_IMAGE_STYLE.capture_and_upload_wrapper_bg}">\n          <div class="capture-and-upload-wrapper-body" style="background-image: url(${t.CAPTURE_IMAGE_STYLE.capture_and_upload_wrapper_bg_img})">\n            <div class="btn-wrapper">\n              <div class="common-btn" id="capture-btn-id" style="display: flex; background: ${t.CAPTURE_IMAGE_STYLE.capture_btn_background};">\n                <img id="take-picture-step1-img" class="camera-icon"  src="${t.CAPTURE_IMAGE_STYLE.capture_btn_icon}" />\n                <span class="title" id="take-picture-step1-title" style="color: ${t.CAPTURE_IMAGE_STYLE.capture_btn_color};"><var>FACE.TAKE_PHOTO</var></span>\n              </div>\n              <div id="upload-image-web" class="upload-btn-wrapper">\n                <button class="btn btn-upload-image" style="border: ${t.CAPTURE_IMAGE_STYLE.upload_btn_boder};background-color: ${t.CAPTURE_IMAGE_STYLE.upload_btn_background}">\n                  <img alt="active" src=${t.CAPTURE_IMAGE_STYLE.upload_btn_icon} />\n                  <span style="color: ${t.CAPTURE_IMAGE_STYLE.upload_btn_color}"><var>FRONT.UPLOAD_IMAGE</var></span>\n                </button>\n                <input accept="image/*" id="fileInputWeb10" name="img-id" type="file" />\n              </div>\n            </div>\n\n            <div class="camera_attach" id="front_camera">\n              <video id="camera_attach_video" width="100%" muted="" playsinline="" class="video-stream" src=""></video>\n              <div class="action-wrapper">\n                <div class="common-btn" id="caputure-in-video" style="display: flex; background: ${t.CAPTURE_IMAGE_STYLE.capture_btn_background};">\n                  <img id="take-picture-step1-img" class="camera-icon" src="${t.CAPTURE_IMAGE_STYLE.capture_btn_icon}" />\n                  <span class="title" id="take-picture-step1-title" style="color: ${t.CAPTURE_IMAGE_STYLE.capture_btn_color};"><var>FACE.TAKE_PHOTO</var></span>\n                </div>\n                <div id="upload-image-web" class="upload-btn-wrapper">\n                  <button class="btn btn-upload-image" style="border: ${t.CAPTURE_IMAGE_STYLE.upload_btn_boder};background-color: ${t.CAPTURE_IMAGE_STYLE.upload_btn_background}">\n                    <img alt="active" src=${t.CAPTURE_IMAGE_STYLE.upload_btn_icon} />\n                    <span style="color: ${t.CAPTURE_IMAGE_STYLE.upload_btn_color}"><var>FRONT.UPLOAD_IMAGE</var></span>\n                  </button>\n                  <input accept="image/*" id="fileInputWeb11" name="img-id" type="file" />\n                </div>\n              </div>\n            </div>\n\n            <div class="camera_result" id="results_front_camera">\n              <img id="img-result"/>\n              <div class="action-wrapper">\n                <div class="common-btn" id="re-caputure-in-video" style="display: flex; background: ${t.CAPTURE_IMAGE_STYLE.recapture_btn_background};">\n                  <img id="take-picture-step1-img" class="camera-icon" src="${t.CAPTURE_IMAGE_STYLE.recapture_btn_icon}" />\n                  <span class="title" id="take-picture-step1-title" style="color: ${t.CAPTURE_IMAGE_STYLE.recapture_btn_color};"><var>FACE.TAKE_AGAIN</var></span>\n                </div>\n                <div id="upload-image-web" class="upload-btn-wrapper">\n                  <button class="btn btn-upload-image" style="border: ${t.CAPTURE_IMAGE_STYLE.upload_btn_boder};background-color: ${t.CAPTURE_IMAGE_STYLE.upload_btn_background}">\n                    <img alt="active" src=${t.CAPTURE_IMAGE_STYLE.upload_btn_icon} />\n                    <span style="color: ${t.CAPTURE_IMAGE_STYLE.upload_btn_color}"><var>FRONT.UPLOAD_IMAGE</var></span>\n                  </button>\n                  <input accept="image/*" id="fileInputWeb12" name="img-id" type="file" />\n                </div>\n            </div>\n            </div>\n          </div>\n        </div>\n\n        <div class="description" id="description-1" style="color:${t.CAPTURE_IMAGE_STYLE.description1_color};">\n          <p><var>FACE.PLEASE</var></p>\n          <p><var>FRONT.GUIDE_4</var></p>\n        </div>\n        <div class="description" id="description-2" style="color:${t.CAPTURE_IMAGE_STYLE.description1_color};">\n          <p><var>FRONT.GUIDE_7</var></p>\n        </div>\n\n        <div class="common-btn" id="next-step-btn" style="background-color: ${t.CAPTURE_IMAGE_STYLE.nextstep_btn_background};">\n          <img class="next-icon" src=${t.CAPTURE_IMAGE_STYLE.nextstep_btn_icon} />\n          <span class="title" id="take-picture-step1-title" style="color: ${t.CAPTURE_IMAGE_STYLE.nextstep_btn_color}"><var>FACE.NEXT</var></span>\n        </div>\n        ${S(t)}\n        <div class="tutorial-mobile"><a id="tutorial-mobile"><var>FACE.GUIDE</var></a></div>\n      </div>\n      <img id="tutorial_btn" class="tutorial_btn" src=${t.CAPTURE_IMAGE_STYLE.tutorial_btn_icon}>\n      ${j(t)}\n    </div>`;
        const o = document.getElementById("ekyc_sdk_intergrated");
        o.insertAdjacentHTML("beforeend", a.replace(/(\r\n|\n|\r)/gm, ""));
        _(o.getElementsByTagName("var"), t.LANGUAGE);
        const c = window.screen.width < window.outerWidth ? window.screen.width : window.outerWidth;
        let l = document.getElementById("tutorial-mobile")
          , s = document.getElementById("tutorial_btn")
          , r = document.getElementById("close-pop-1")
          , v = document.getElementById("ekyc-popup-1")
          , p = document.getElementsByClassName("capture-and-upload-block")[0]
          , u = document.getElementById("ekyc-loading")
          , g = document.getElementById("front_camera")
          , y = document.getElementById("results_front_camera")
          , h = document.getElementById("img-result")
          , E = document.getElementsByClassName("btn-wrapper")[0]
          , f = document.getElementById("description-1")
          , T = document.getElementById("description-2")
          , C = document.getElementById("next-step-btn")
          , L = {}
          , O = []
          , M = {}
          , R = {}
          , N = {};
        function U() {
            v.style.display = "block",
            p.style.display = "none",
            c > 1024 ? s.style.display = "none" : l.style.display = "none"
        }
        function B() {
            c > 1024 ? s.style.display = "block" : l.style.display = "block",
            v.style.display = "none",
            p.style.display = "block"
        }
        function D(e) {
            e && O.push(e)
        }
        N.typeDocument = e,
        L.type_document = e;
        const P = e=>{
            "front" == i && (localStorage.setItem("img_front_document", JSON.stringify(e.object.hash)),
            M.hash0 = e.object.hash),
            "back" == i && (M.hash1 = e.object.hash),
            u.style.display = "none"
        }
          , G = e=>{
            u.style.display = "none",
            console.log("uploadFileFail", e)
        }
          , F = e=>{
            let n = null
              , a = {};
            E.style.display = "none",
            g.style.display = "block",
            g.style.display = "none",
            y.style.display = "block",
            h.src = e.target.result,
            u.style.display = "block",
            x(),
            O.length > 0 && b(O),
            "front" == i ? L.img_front_b64 = e.target.result : L.img_back_b64 = e.target.result,
            n = d(e.target.result),
            a.file = n,
            k(a, P, G, t)
        }
          , x = ()=>{
            f.style.display = "none",
            T.style.display = "block",
            C.style.display = "flex"
        }
        ;
        document.getElementById("capture-btn-id").onclick = function() {
            E.style.display = "none",
            g.style.display = "block",
            u.style.display = "block",
            m("camera_attach_video", (e=>{
                D(e),
                e && (u.style.display = "none")
            }
            ))
        }
        ,
        document.getElementById("caputure-in-video").onclick = function() {
            let e = document.getElementById("camera_attach_video")
              , n = document.createElement("canvas")
              , a = null
              , o = null
              , c = {};
            n.width = e.videoWidth,
            n.height = e.videoHeight,
            n.getContext("2d").drawImage(e, 0, 0, e.videoWidth, e.videoHeight),
            a = n.toDataURL("image/jpeg"),
            h.src = a,
            o = d(a),
            c.file = o,
            g.style.display = "none",
            y.style.display = "block",
            u.style.display = "block",
            x(),
            b(O),
            "front" == i ? L.img_front_b64 = a : L.img_back_b64 = a,
            k(c, P, G, t)
        }
        ,
        document.getElementById("re-caputure-in-video").onclick = function() {
            y.style.display = "none",
            g.style.display = "block",
            f.style.display = "block",
            T.style.display = "none",
            C.style.display = "none",
            u.style.display = "block",
            m("camera_attach_video", (e=>{
                e && (u.style.display = "none"),
                D(e)
            }
            ))
        }
        ,
        document.getElementById("fileInputWeb10").onchange = function() {
            let e = this.value
              , t = /(\.jpg|\.jpeg|\.png|\.gif)$/i
              , i = new FileReader
              , n = this.files[0];
            i.onloadend = i=>{
                if (!n || !t.exec(e))
                    return alert("Please upload file image only."),
                    this.value = "",
                    !1;
                F(i)
            }
            ,
            i.readAsDataURL(n)
        }
        ,
        document.getElementById("fileInputWeb11").onchange = function() {
            let e = this.value
              , t = /(\.jpg|\.jpeg|\.png|\.gif)$/i
              , i = new FileReader
              , n = this.files[0];
            i.onloadend = i=>{
                if (!n || !t.exec(e))
                    return alert("Please upload file image only."),
                    this.value = "",
                    !1;
                F(i)
            }
            ,
            i.readAsDataURL(n)
        }
        ,
        document.getElementById("fileInputWeb12").onchange = function() {
            let e = this.value
              , t = /(\.jpg|\.jpeg|\.png|\.gif)$/i
              , i = new FileReader
              , n = this.files[0];
            i.onloadend = i=>{
                if (!n || !t.exec(e))
                    return alert("Please upload file image only."),
                    this.value = "",
                    !1;
                F(i)
            }
            ,
            i.readAsDataURL(n)
        }
        ;
        const Y = async()=>{
            u.style.display = "none"
        }
        ;
        C.onclick = async()=>{
            if (u.style.display = "block",
            "front" == i)
                if (R.currentHash = M.hash0,
                N.currentHash = M.hash0,
                5 == e || 6 == e)
                    if (t.CHECK_LIVENESS_CARD) {
                        const e = await A(R, t)
                          , i = await I(N, t);
                        L.ocr = i,
                        L.liveness_card_front = e,
                        await n(L),
                        await Y()
                    } else {
                        const e = await I(N, t);
                        L.ocr = e,
                        await n(L),
                        await Y()
                    }
                else if (t.CHECK_LIVENESS_CARD) {
                    const e = await A(R, t);
                    L.liveness_card_front = e,
                    await n(L),
                    await Y()
                } else
                    await n(L),
                    await Y();
            else {
                let e = {};
                if (e.hash0 = localStorage.getItem("img_front_document") ? JSON.parse(localStorage.getItem("img_front_document")) : null,
                e.hash1 = M.hash1,
                N.dataHash = e,
                R.currentHash = M.hash1,
                t.CHECK_LIVENESS_CARD) {
                    const e = await A(R, t)
                      , i = await w(N, t);
                    L.ocr = i,
                    L.liveness_card_back = e,
                    await n(L),
                    await Y()
                } else {
                    const e = await w(N, t);
                    L.ocr = e,
                    await n(L),
                    await Y()
                }
            }
        }
        ,
        r.onclick = function() {
            B()
        }
        ,
        s.onclick = function() {
            U()
        }
        ,
        l.onclick = function() {
            U()
        }
        ,
        t.SHOW_HELP ? "front" == i ? U() : B() : (B(),
        s.style.display = "none",
        l.style.display = "none")
    }
    ;
    var D = (e,t,i,n)=>{
        var a = `<div class="capture-webcam-wrapper">\n      <div class="capture-webcam">\n        <p class="header-title" style="color:${t.CAPTURE_IMAGE_STYLE.big_title_color}"><var>${"front" == i ? "FRONT.FRONT" : "FRONT.BACK"}</var></p>\n        <div class="webcame-zone" id="webcame-zone" >\n          <div class="video-block" id="video-block"><video class="action-block" id="video1" muted="" playsinline="" autoplay=""></video></div>\n          <div id="webcam-result">\n            <img id="img-result" />\n          </div>\n        </div>\n        <div class="ekyc_description" id="ekyc_description" style="display: block; color:${t.CAPTURE_IMAGE_STYLE.description1_color};">\n          <span><var>FACE.PLEASE</var></span><br />\n          <span><var>FRONT.GUIDE_4</var></span>\n        </div>\n        <div class="take-picture-btn" id="take-picture-webcam" style="display: flex; background: ${t.CAPTURE_IMAGE_STYLE.capture_btn_background};">\n          <img id="take-picture-webcam-img" class="camera-icon" src="${t.CAPTURE_IMAGE_STYLE.capture_btn_icon}" />\n          <span class="title" id="take-picture-webcam-title" style="color: ${t.CAPTURE_IMAGE_STYLE.capture_btn_color};"><var>FACE.TAKE_PHOTO</var></span>\n        </div>\n        \n        <div class="after-capture-wrapper" id="after-capture">\n          <div class="step1-after-capture">\n            <div class="re-capture" id="re-capture" style="display: flex; background: ${t.CAPTURE_IMAGE_STYLE.recapture_btn_background}; border: ${t.CAPTURE_IMAGE_STYLE.recapture_btn_border}">\n              <img id="re-capture-icon" class="camera-icon" src="${t.CAPTURE_IMAGE_STYLE.recapture_btn_icon}" />\n              <span id="re-capture-title" style="color: ${t.CAPTURE_IMAGE_STYLE.recapture_btn_color};"><var>FACE.TAKE_AGAIN</var></span>\n            </div>\n            <div class="next-step" id="step1-next-step" style="display: flex; background: ${t.CAPTURE_IMAGE_STYLE.nextstep_btn_background}">\n              <img id="step1-next-step-icon" class="next-icon" src="${t.CAPTURE_IMAGE_STYLE.nextstep_btn_icon}" />\n              <span id="step1-next-step-title" style="color: ${t.CAPTURE_IMAGE_STYLE.nextstep_btn_color};"><var>FACE.NEXT</var></span>\n            </div>\n          </div>\n        </div>\n        ${S(t)}\n        <div class="tutorial-mobile"><a id="tutorial-mobile"><var>FACE.GUIDE</var></a></div>\n      </div>\n      <img id="tutorial_btn" class="tutorial_btn" src=${t.CAPTURE_IMAGE_STYLE.tutorial_btn_icon}>\n      ${j(t)}\n    </div>`;
        const o = document.getElementById("ekyc_sdk_intergrated");
        o.insertAdjacentHTML("beforeend", a.replace(/(\r\n|\n|\r)/gm, ""));
        _(o.getElementsByTagName("var"), t.LANGUAGE),
        m("video1", (e=>{
            D(e)
        }
        ));
        const c = window.screen.width < window.outerWidth ? window.screen.width : window.outerWidth;
        let l = document.getElementById("tutorial-mobile")
          , s = document.getElementById("tutorial_btn")
          , r = document.getElementById("close-pop-1")
          , v = document.getElementById("ekyc-popup-1")
          , p = document.getElementsByClassName("capture-webcam")[0]
          , u = document.getElementById("take-picture-webcam")
          , g = document.getElementById("video-block")
          , y = document.getElementById("img-result")
          , h = document.getElementById("after-capture")
          , E = document.getElementById("re-capture")
          , f = document.getElementById("webcam-result")
          , T = document.getElementById("ekyc-loading")
          , C = document.getElementById("step1-next-step")
          , L = {}
          , O = []
          , M = {}
          , R = {}
          , N = {};
        function U() {
            v.style.display = "block",
            p.style.display = "none",
            c > 1024 ? s.style.display = "none" : l.style.display = "none"
        }
        function B() {
            c > 1024 ? s.style.display = "block" : l.style.display = "block",
            v.style.display = "none",
            p.style.display = "block"
        }
        function D(e) {
            e && O.push(e)
        }
        L.type_document = e,
        R.typeDocument = e;
        const P = e=>{
            "front" == i && (localStorage.setItem("img_front_document", JSON.stringify(e.object.hash)),
            M.hash0 = e.object.hash),
            "back" == i && (M.hash1 = e.object.hash),
            T.style.display = "none"
        }
          , G = e=>{
            T.style.display = "none",
            console.log("uploadFileFail", e)
        }
        ;
        u.onclick = ()=>{
            let e = document.getElementById("video1")
              , n = document.createElement("canvas")
              , a = null
              , o = null
              , c = {};
            n.width = e.videoWidth,
            n.height = e.videoHeight,
            n.getContext("2d").drawImage(e, 0, 0, e.videoWidth, e.videoHeight),
            a = n.toDataURL("image/jpeg"),
            y.src = a,
            o = d(a),
            c.file = o,
            g.style.display = "none",
            u.style.display = "none",
            h.style.display = "block",
            f.style.display = "block",
            T.style.display = "block",
            b(O),
            "front" == i ? L.img_front_b64 = a : L.img_back_b64 = a,
            k(c, P, G, t)
        }
        ,
        E.onclick = ()=>{
            f.style.display = "none",
            h.style.display = "none",
            g.style.display = "block",
            u.style.display = "flex",
            m("video1", (e=>{
                D(e)
            }
            ))
        }
        ;
        const F = async()=>{
            T.style.display = "none"
        }
        ;
        C.onclick = async()=>{
            if (T.style.display = "block",
            "front" == i)
                if (N.currentHash = M.hash0,
                R.currentHash = M.hash0,
                5 == e || 6 == e)
                    if (t.CHECK_LIVENESS_CARD) {
                        const e = await A(N, t)
                          , i = await I(R, t);
                        L.ocr = i,
                        L.liveness_card_front = e,
                        await n(L),
                        await F()
                    } else {
                        const e = await I(R, t);
                        L.ocr = e,
                        await n(L),
                        await F()
                    }
                else if (t.CHECK_LIVENESS_CARD) {
                    const e = await A(N, t);
                    L.liveness_card_front = e,
                    await n(L),
                    await F()
                } else
                    await n(L),
                    await F();
            else {
                let e = {};
                if (e.hash0 = localStorage.getItem("img_front_document") ? JSON.parse(localStorage.getItem("img_front_document")) : null,
                e.hash1 = M.hash1,
                R.dataHash = e,
                N.currentHash = M.hash1,
                t.CHECK_LIVENESS_CARD) {
                    const e = await A(N, t)
                      , i = await w(R, t);
                    L.ocr = i,
                    L.liveness_card_back = e,
                    await n(L),
                    await F()
                } else {
                    const e = await w(R, t);
                    L.ocr = e,
                    await n(L),
                    await F()
                }
            }
        }
        ,
        r.onclick = function() {
            B()
        }
        ,
        s.onclick = function() {
            U()
        }
        ,
        l.onclick = function() {
            U()
        }
        ,
        t.SHOW_HELP ? "front" == i ? U() : B() : (B(),
        s.style.display = "none",
        l.style.display = "none")
    }
    ;
    var P = (e,t,i,n)=>{
        let a = `<div class="capture-and-upload-block-wrapper">\n      <div class="capture-and-upload-block">\n        <p class="header-title" style="color:${t.CAPTURE_IMAGE_STYLE.big_title_color}"><var>${"front" == i ? "FRONT.FRONT" : "FRONT.BACK"}</var></p>\n        <div class="capture-and-upload-wrapper" style="background-color: ${t.CAPTURE_IMAGE_STYLE.capture_and_upload_wrapper_bg}">\n          <div class="capture-and-upload-wrapper-body" style="background-image: url(${t.CAPTURE_IMAGE_STYLE.capture_and_upload_wrapper_bg_img})">\n            <div class="btn-wrapper">\n              <div id="upload-image-web" class="upload-btn-wrapper">\n                <button class="btn btn-upload-image" style="border: ${t.CAPTURE_IMAGE_STYLE.upload_btn_boder};background-color: ${t.CAPTURE_IMAGE_STYLE.upload_btn_background}">\n                  <img alt="active" src=${t.CAPTURE_IMAGE_STYLE.upload_btn_icon} />\n                  <span style="color: ${t.CAPTURE_IMAGE_STYLE.upload_btn_color}"><var>FRONT.UPLOAD_IMAGE</var></span>\n                </button>\n                <input accept="image/*" id="fileInputWeb10" name="img-id" type="file" />\n              </div>\n            </div>\n\n            <div class="camera_result" id="results_front_camera">\n              <img id="img-result"/>\n              <div class="action-wrapper">\n                <div id="upload-image-web" class="upload-btn-wrapper">\n                  <button class="btn btn-upload-image" style="border: ${t.CAPTURE_IMAGE_STYLE.upload_btn_boder};background-color: ${t.CAPTURE_IMAGE_STYLE.upload_btn_background}">\n                    <img alt="active" src=${t.CAPTURE_IMAGE_STYLE.upload_btn_icon} />\n                    <span  style="color: ${t.CAPTURE_IMAGE_STYLE.upload_btn_color}"><var>FRONT.UPLOAD_IMAGE</var></span>\n                  </button>\n                  <input accept="image/*" id="fileInputWeb12" name="img-id" type="file" />\n                </div>\n            </div>\n            </div>\n          </div>\n        </div>\n\n        <div class="description" id="description-1" style="color:${t.CAPTURE_IMAGE_STYLE.description1_color};">\n          <p><var>FACE.PLEASE</var></p>\n          <p><var>FRONT.GUIDE_4</var></p>\n        </div>\n        <div class="description" id="description-2" style="color:${t.CAPTURE_IMAGE_STYLE.description1_color};">\n          <p><var>FRONT.GUIDE_7</var></p>\n        </div>\n\n        <div class="common-btn" id="next-step-btn" style="background-color: ${t.CAPTURE_IMAGE_STYLE.nextstep_btn_background}">\n          <img class="next-icon" src=${t.CAPTURE_IMAGE_STYLE.nextstep_btn_icon} />\n          <span class="title" id="take-picture-step1-title"  style="color: ${t.CAPTURE_IMAGE_STYLE.nextstep_btn_color}"><var>FACE.NEXT</var></span>\n        </div>\n        ${S(t)}\n        <div class="tutorial-mobile"><a id="tutorial-mobile"><var>FACE.GUIDE</var></a></div>\n      </div>\n      <img id="tutorial_btn" class="tutorial_btn" src=${t.CAPTURE_IMAGE_STYLE.tutorial_btn_icon}>\n      ${j(t)}\n    </div>`;
        const o = document.getElementById("ekyc_sdk_intergrated");
        o.insertAdjacentHTML("beforeend", a.replace(/(\r\n|\n|\r)/gm, ""));
        _(o.getElementsByTagName("var"), t.LANGUAGE);
        const c = window.screen.width < window.outerWidth ? window.screen.width : window.outerWidth;
        let l = document.getElementById("tutorial-mobile")
          , s = document.getElementById("tutorial_btn")
          , r = document.getElementById("close-pop-1")
          , v = document.getElementById("ekyc-popup-1")
          , p = document.getElementsByClassName("capture-and-upload-block")[0]
          , u = document.getElementById("ekyc-loading")
          , g = document.getElementById("results_front_camera")
          , m = document.getElementById("img-result")
          , y = document.getElementsByClassName("btn-wrapper")[0]
          , b = document.getElementById("description-1")
          , h = document.getElementById("description-2")
          , E = document.getElementById("next-step-btn")
          , f = {}
          , T = {}
          , C = {}
          , L = {};
        function O() {
            v.style.display = "block",
            p.style.display = "none",
            c > 1024 ? s.style.display = "none" : l.style.display = "none"
        }
        function M() {
            c > 1024 ? s.style.display = "block" : l.style.display = "block",
            v.style.display = "none",
            p.style.display = "block"
        }
        f.type_document = e,
        L.typeDocument = e;
        const R = e=>{
            "front" == i && (localStorage.setItem("img_front_document", JSON.stringify(e.object.hash)),
            T.hash0 = e.object.hash),
            "back" == i && (T.hash1 = e.object.hash),
            u.style.display = "none"
        }
          , N = e=>{
            u.style.display = "none",
            console.log("uploadFileFail", e)
        }
          , U = e=>{
            var n, a = {};
            y.style.display = "none",
            g.style.display = "block",
            m.src = e.target.result,
            u.style.display = "block",
            B(),
            "front" == i ? f.img_front_b64 = e.target.result : f.img_back_b64 = e.target.result,
            n = d(e.target.result),
            a.file = n,
            k(a, R, N, t)
        }
          , B = ()=>{
            b.style.display = "none",
            h.style.display = "block",
            E.style.display = "flex"
        }
        ;
        document.getElementById("fileInputWeb10").onchange = function() {
            let e = this.value
              , t = /(\.jpg|\.jpeg|\.png|\.gif)$/i
              , i = new FileReader
              , n = this.files[0];
            i.onloadend = i=>{
                if (!n || !t.exec(e))
                    return alert("Please upload file image only!"),
                    this.value = "",
                    !1;
                U(i)
            }
            ,
            i.readAsDataURL(n)
        }
        ,
        document.getElementById("fileInputWeb12").onchange = function() {
            let e = this.value
              , t = /(\.jpg|\.jpeg|\.png|\.gif)$/i
              , i = new FileReader
              , n = this.files[0];
            i.onloadend = i=>{
                if (!n || !t.exec(e))
                    return alert("Please upload file image only!"),
                    this.value = "",
                    !1;
                U(i)
            }
            ,
            i.readAsDataURL(n)
        }
        ;
        const D = async()=>{
            u.style.display = "none"
        }
        ;
        E.onclick = async()=>{
            if (u.style.display = "block",
            "front" == i)
                if (C.currentHash = T.hash0,
                L.currentHash = T.hash0,
                5 == e || 6 == e)
                    if (t.CHECK_LIVENESS_CARD) {
                        const e = await A(C, t)
                          , i = await I(L, t);
                        f.ocr = i,
                        f.liveness_card_front = e,
                        await n(f),
                        await D()
                    } else {
                        const e = await I(L, t);
                        f.ocr = e,
                        await n(f),
                        await D()
                    }
                else if (t.CHECK_LIVENESS_CARD) {
                    const e = await A(C, t);
                    f.liveness_card_front = e,
                    await n(f),
                    await D()
                } else
                    await n(f),
                    await D();
            else {
                let e = {};
                if (e.hash0 = localStorage.getItem("img_front_document") ? JSON.parse(localStorage.getItem("img_front_document")) : null,
                e.hash1 = T.hash1,
                L.dataHash = e,
                C.currentHash = T.hash1,
                t.CHECK_LIVENESS_CARD) {
                    const e = await A(C, t)
                      , i = await w(L, t);
                    f.ocr = i,
                    f.liveness_card_back = e,
                    await n(f),
                    await D()
                } else {
                    const e = await w(L, t);
                    f.ocr = e,
                    await n(f),
                    await D()
                }
            }
        }
        ,
        r.onclick = function() {
            M()
        }
        ,
        s.onclick = function() {
            O()
        }
        ,
        l.onclick = function() {
            O()
        }
        ,
        t.SHOW_HELP ? "front" == i ? O() : M() : (M(),
        s.style.display = "none",
        l.style.display = "none")
    }
    ;
    var G = function(e, t, i, n) {
        let a = {}
          , o = {}
          , c = "vi" == t.LANGUAGE ? "Ảnh chụp giấy tờ không hợp lệ, vui lòng thử lại !" : "Photo of document is invalid, please try again!";
        const l = window.screen.width < window.outerWidth ? window.screen.width : window.outerWidth;
        function s() {
            const e = document.getElementsByClassName("capture-and-upload-block-wrapper")[0];
            e.parentNode.removeChild(e)
        }
        function d(e) {
            o.img_front = e.img_front_b64,
            delete e.img_front_b64,
            a.base64_doc_img = o,
            a = Object.assign({
                ...a
            }, e, {}),
            i(a),
            n && n(a)
        }
        if (t.USE_WEBCAM && t.USE_UPLOAD)
            if (l > 1024) {
                const i = n=>{
                    s(),
                    400 == n.ocr.statusCode ? (alert(c),
                    B(e, t, "front", i)) : d(n)
                }
                ;
                B(e, t, "front", i)
            } else {
                const i = n=>{
                    s(),
                    400 == n.ocr.statusCode ? (alert(c),
                    P(e, t, "front", i)) : d(n)
                }
                ;
                P(e, t, "front", i)
            }
        if (t.USE_WEBCAM && !t.USE_UPLOAD) {
            const i = n=>{
                var a;
                (a = document.getElementsByClassName("capture-webcam-wrapper")[0]).parentNode.removeChild(a),
                400 == n.ocr.statusCode ? (alert(c),
                D(e, t, "front", i)) : d(n)
            }
            ;
            D(e, t, "front", i)
        }
        if (!t.USE_WEBCAM && t.USE_UPLOAD) {
            const i = n=>{
                s(),
                400 == n.ocr.statusCode ? (alert(c),
                P(e, t, "front", i)) : d(n)
            }
            ;
            P(e, t, "front", i)
        }
    };
    var F = function(e, t, i, n) {
        let a = {}
          , o = {}
          , c = "vi" == t.LANGUAGE ? "Ảnh chụp giấy tờ không hợp lệ, vui lòng thử lại !" : "Photo of document is invalid, please try again!";
        const l = window.screen.width < window.outerWidth ? window.screen.width : window.outerWidth;
        function s() {
            const e = document.getElementsByClassName("capture-and-upload-block-wrapper")[0];
            e.parentNode.removeChild(e)
        }
        function d() {
            var e = document.getElementsByClassName("capture-webcam-wrapper")[0];
            e.parentNode.removeChild(e)
        }
        if (t.USE_WEBCAM && t.USE_UPLOAD)
            if (l > 1024) {
                const l = d=>{
                    s(),
                    o.img_front = d.img_front_b64,
                    delete d.img_front_b64;
                    B(e, t, "back", (r=>{
                        s(),
                        400 == r.ocr.statusCode ? (alert(c),
                        B(e, t, "front", l)) : (o.img_back = r.img_back_b64,
                        delete r.img_back_b64,
                        a.base64_doc_img = o,
                        a = Object.assign({
                            ...a
                        }, d, r),
                        i(a),
                        n && n(a))
                    }
                    ))
                }
                ;
                B(e, t, "front", l)
            } else {
                const l = d=>{
                    s(),
                    o.img_front = d.img_front_b64,
                    delete d.img_front_b64;
                    P(e, t, "back", (r=>{
                        s(),
                        400 == r.ocr.statusCode ? (alert(c),
                        P(e, t, "front", l)) : (o.img_back = r.img_back_b64,
                        delete r.img_back_b64,
                        a.base64_doc_img = o,
                        a = Object.assign({
                            ...a
                        }, d, r),
                        i(a),
                        n && n(a))
                    }
                    ))
                }
                ;
                P(e, t, "front", l)
            }
        if (t.USE_WEBCAM && !t.USE_UPLOAD) {
            const l = s=>{
                d(),
                o.img_front = s.img_front_b64,
                delete s.img_front_b64;
                D(e, t, "back", (r=>{
                    d(),
                    400 == r.ocr.statusCode ? (alert(c),
                    D(e, t, "front", l)) : (o.img_back = r.img_back_b64,
                    delete r.img_back_b64,
                    a.base64_doc_img = o,
                    a = Object.assign({
                        ...a
                    }, s, r),
                    i(a),
                    n && n(a))
                }
                ))
            }
            ;
            D(e, t, "front", l)
        }
        if (!t.USE_WEBCAM && t.USE_UPLOAD) {
            const c = c=>{
                console.log("data1", c),
                s(),
                o.img_front = c.img_front_b64,
                delete c.img_front_b64;
                P(e, t, "back", (e=>{
                    console.log("data2", e),
                    s(),
                    o.img_back = e.img_back_b64,
                    delete e.img_back_b64,
                    a.base64_doc_img = o,
                    a = Object.assign({
                        ...a
                    }, c, e),
                    i(a),
                    n && n(a)
                }
                ))
            }
            ;
            P(e, t, "front", c)
        }
    };
    function x(e, t) {
        !function() {
            console.log("ket-qua", e);
            var t = document.getElementById("vnpt_ekyc")
              , i = '<div class="step-4" id="ekyc-step-4"><ul class="progressbar" id="progressbar" style="width:45%;margin-bottom: 27px"><li class="complete" id="progress-step0">Mặt trước</li><li  class="complete" id="progress-step1">Mặt sau</li><li  class="complete" id="progress-step2">Chân dung</li><li  class="complete" id="progress-step3">Kết quả</li></ul><div class="info-wrap"><div class="tabs"><div id="validation" class="tab"><ul class="nav nav-tabs"><li id="info-tab"><div>Thông tin cá nhân</div></li><li id="validation-tab" class="active"><div>Validation</div></li></ul><div class="block-left" id="tab2-content"><div class="item"><div class="label-cus">Loại giấy tờ</div><div class="item-content">' + (n(e) || n(e.ocr) || n(e.ocr.object) ? '<div style="color:red;">Không hợp lệ</div>' : '<div style="color:green;">Hợp lệ</div>') + '</div></div><div class="item"><div class="label-cus">Mặt trước, sau giấy tờ</div><div class="item-content">' + (n(e) || n(e.ocr) || n(e.ocr.object) ? function(e) {
                let t = "";
                t = n(e && e.errors.find((e=>"Dau vao mat truoc va sau khong cung loai" == e))) ? "" : '<div style="color:red;">Không cùng loại</div>';
                return t
            }(e.orc_err) : function(e, t) {
                let i = "";
                i = e == t ? '<div style="color: green;">Cùng loại</div>' : '<div style="color: red;">Không cùng loại</div>';
                return i
            }(e.ocr.object.back_type_id, e.ocr.object.type_id)) + '</div></div><div class="item"><div class="label-cus">Giấy tờ mờ nhòe/mất góc</div><div class="item-content">' + (n(e) || n(e.ocr) || n(e.ocr.object) ? "" : function(e) {
                let t = "";
                t = n(e) ? '<div style="color:green;">Không</div>' : '<div style="color:red;">Có</div>';
                return t
            }(e.ocr.object.warning)) + '</div></div><div class="item"><div class="label-cus">Chất lượng số ID</div><div class="item-content">' + (n(e) || n(e.ocr) || n(e.ocr.object) ? "" : function(e) {
                let t = JSON.parse(e);
                if (n(t))
                    return '<div style="color: red;">Mờ nhòe</div>';
                for (var i = 0; i < t.length; i++)
                    if (t[i] < .93)
                        return '<div style="color: red;">Mờ nhòe</div>';
                return '<div style="color: green;">Tốt</div>'
            }(e.ocr.object.id_probs)) + '</div></div><div class="item"><div class="label-cus">Chất lượng ngày cấp</div><div class="item-content">' + (n(e) || n(e.ocr) || n(e.ocr.object) ? "" : function(e) {
                if (e < .93)
                    return '<div style="color: red;">Mờ nhòe</div>';
                return '<div style="color: green;">Tốt</div>'
            }(e.ocr.object.issue_date_prob)) + '</div></div><div class="item"><div class="label-cus">Hạn giấy tờ</div><div class="item-content">' + (n(e) || n(e.ocr) || n(e.ocr.object) ? "" : function(e) {
                let t = "";
                t = "no" == e ? '<div style="color:green;">Còn hạn</div>' : '<div style="color:red;">Hết hạn</div>';
                return t
            }(e.ocr.object.expire_warning)) + '</div></div><div class="item"><div class="label-cus">Xác thực giấy tờ</div><div class="item-content">' + (n(e) || n(e.liveness_card_front) || n(e.liveness_card_back) || n(e.liveness_card_front.object) || n(e.liveness_card_back.object) ? "" : function(e, t) {
                let i = "";
                i = e || t ? '<div style="color:red;">Không chụp trực tiếp</div>' : '<div style="color:green;">Chụp trực tiếp</div>';
                return i
            }(e.liveness_card_front.object.fake_liveness, e.liveness_card_back.object.fake_liveness)) + '</div></div><div class="item"><div class="label-cus">Cảnh báo trường thông tin</div><div class="item-content">' + (n(e) || n(e.ocr) || n(e.ocr.object) ? "" : function(e) {
                const t = {
                    id_sua_xoa: "Số ID bị sửa xóa",
                    id_ko_hop_le: "Số ID không hợp lệ",
                    id_dob_ko_khop: "Mã năm sinh không khớp",
                    id_gender_ko_khop: "Mã giới tính không khớp",
                    id_post_code_ko_khop: "Mã tỉnh/TP không khớp",
                    invalid_dob: "Mã ngày sinh không hợp lệ",
                    den_trang_ko_hop_le: "Giấy tờ photo",
                    fake_printing: "Giấy tờ không hợp lệ",
                    id_invalid_length: "Số ID không hợp lệ"
                };
                let i = ""
                  , n = []
                  , a = [];
                for (var o = 0; o < e.length; o++)
                    "id_ko_hop_le" == e[o] || "id_dob_ko_khop" == e[o] || "id_gender_ko_khop" == e[o] || "id_post_code_ko_khop" == e[o] || "invalid_dob" == e[o] ? n.push(e[o]) : a.push(e[o]);
                if (n.length > 0)
                    for (o = 0; o < n.length; o++)
                        i += '<div style="color:#ff7f00;">' + t[e[o]] + "</div>";
                else if (a.length > 0)
                    for (o = 0; o < a.length; o++)
                        i += '<div style="color:#ff7f00;">' + t[e[o]] + "</div>";
                else
                    i = '<div style="color:green;">Hợp lệ</div>';
                return i
            }(e.ocr.object.tampering.warning)) + '</div></div><div class="item"><div class="label-cus">Dán đè ảnh</div><div class="item-content">' + (n(e) || n(e.liveness_card_front) || n(e.liveness_card_front.object) ? "" : function(e) {
                let t = "";
                t = e ? '<div style="color:red;">Có</div>' : '<div style="color:green;">Không</div>';
                return t
            }(e.liveness_card_front.object.face_swapping)) + '</div></div><div class="item"><div class="label-cus">Mở mắt</div><div class="item-content">' + (n(e) || n(e.liveness_face) || n(e.liveness_face.object) ? "" : function(e) {
                let t = "";
                t = "yes" == e ? '<div style="color:green;">Có</div>' : '<div style="color:red;">Không</div>';
                return t
            }(e.liveness_face.object.is_eye_open)) + '</div></div><div class="item"><div class="label-cus">Mờ mặt</div><div class="item-content">' + (n(e) || n(e.liveness_face) || n(e.liveness_face.object) ? "" : function(e) {
                let t = "";
                t = "no" == e ? '<div style="color:green;">Không</div>' : '<div style="color:red;">Có</div>';
                return t
            }(e.liveness_face.object.blur_face)) + '</div></div><div class="item"><div class="label-cus">Xác thực chân dung</div><div class="item-content">' + (n(e) || n(e.liveness_face) || n(e.liveness_face.object) ? "" : function(e) {
                let t = "";
                t = "success" == e ? '<div style="color:green;">Người thật</div>' : '<div style="color:red;">Không phải người thật</div>';
                return t
            }(e.liveness_face.object.liveness)) + '</div></div><div class="item"></div></div></div><div id="info" class="tab"><ul class="nav nav-tabs"><li id="info-tab1" class="active"><div>Thông tin cá nhân</div></li><li id="validation-tab1"><div>Validation</div></li></ul><div class="block-left"><div class="item"><div class="label-cus">Giấy tờ</div><div class="item-content">' + function() {
                let t = '<div style="color:green;" class="check-info-doc">Hợp lệ</div>';
                n(e) ? (t = '<div style="color:red;" class="check-info-doc">Không hợp lệ</div>',
                console.log("data empty")) : (n(e.ocr) || n(e.ocr.object) ? (t = '<div style="color:red;" class="check-info-doc">Không hợp lệ</div>',
                console.log("ocr || obj empty")) : n(e.ocr.object.expire_warning) || "yes" == e.ocr.object.expire_warning && (t = '<div style="color:red;" class="check-info-doc">Không hợp lệ</div>',
                console.log("data.ocr.object.expire_warning")),
                n(e.liveness_card_front) || n(e.liveness_card_back) ? console.log("liveness_card_front || liveness_card_back empty") : (e.liveness_card_front.face_swapping && (t = '<div style="color:red;" class="check-info-doc">Không hợp lệ</div>',
                console.log("data.liveness_card_front.face_swapping")),
                e.liveness_card_front.fake_liveness && (t = '<div style="color:red;" class="check-info-doc">Không hợp lệ</div>',
                console.log("data.liveness_card_front.fake_liveness")),
                e.liveness_card_front.fake_print_photo && (t = '<div style="color:red;" class="check-info-doc">Không hợp lệ</div>',
                console.log("data.liveness_card_front.fake_print_photo")),
                e.liveness_card_back.face_swapping && (t = '<div style="color:red;" class="check-info-doc">Không hợp lệ</div>',
                console.log("data.liveness_card_back.face_swapping")),
                e.liveness_card_back.fake_liveness && (t = '<div style="color:red;" class="check-info-doc">Không hợp lệ</div>',
                console.log("data.liveness_card_back.face_swapping")),
                e.liveness_card_back.fake_print_photo && (t = '<div style="color:red;" class="check-info-doc">Không hợp lệ</div>',
                console.log("data.liveness_card_back.fake_print_photo"))));
                if (!(n(e) || n(e.ocr) || n(e.ocr.object) || n(e.ocr.object.warning_msg))) {
                    let n = e.ocr.object.warning_msg;
                    t = "";
                    for (var i = 0; i < n.length; i++)
                        t += '<div style="color:#ff7f00;">' + n[i] + "</div>";
                    console.log("data.ocr.object.warning", t)
                }
                return t
            }() + '</div></div><div class="item"><div class="label-cus">Số ID</div><div class="item-content">' + (n(e) || n(e.ocr) || n(e.ocr.object) ? "" : e.ocr.object.id) + '</div></div><div class="item"><div class="label-cus">Họ và tên</div><div class="item-content">' + (n(e) || n(e.ocr) || n(e.ocr.object) ? "" : e.ocr.object.name) + '</div></div><div class="item"><div class="label-cus">Ngày sinh</div><div class="item-content">' + (n(e) || n(e.ocr) || n(e.ocr.object) ? "" : e.ocr.object.birth_day) + '</div></div><div class="item"><div class="label-cus">Nơi ĐKHK TT</div><div class="item-content">' + (n(e) || n(e.ocr) || n(e.ocr.object) ? "" : e.ocr.object.recent_location) + '</div></div><div class="item"><div class="label-cus">Giới tính</div><div class="item-content">' + (n(e) || n(e.ocr) || n(e.ocr.object) ? "" : e.ocr.object.gender) + '</div></div><div class="item"><div class="label-cus">Ngày cấp</div><div class="item-content">' + (n(e) || n(e.ocr) || n(e.ocr.object) ? "" : e.ocr.object.issue_date) + '</div></div><div class="item"><div class="label-cus">Nơi cấp</div><div class="item-content">' + (n(e) || n(e.ocr) || n(e.ocr.object) ? "" : e.ocr.object.issue_place) + '</div></div><div class="item"><div class="label-cus">So sánh</div><div class="item-content">' + (n(e) || n(e.compare) || n(e.compare.object) ? '<div style="color: red;"> Không tìm thấy khuôn mặt </div>' : function(e) {
                let t = "";
                t = "NOMATCH" == e.msg ? '<div style="color: red;">' + e.result + "</div>" : '<div style="color: green;">' + e.result + "</div>";
                return t
            }(e.compare.object)) + '</div></div></div></div></div><div class="images-block"><img class="image-result" src="' + (!n(e) && !n(e.base64_doc_img) && e.base64_doc_img.img_front) + '"/><img class="image-result" src="' + (!n(e) && !n(e.base64_doc_img) && e.base64_doc_img.img_back) + '"/><img class="image-result" src="' + (!n(e) && !n(e.base64_face_img) && e.base64_face_img.img_face_far) + '"/><img class="image-result" src="' + (!n(e) && !n(e.base64_face_img) && e.base64_face_img.img_face_near) + '"/></div></div><div class="btn-redemo" id="btn-redemo"><img src="https://ekyc-web.vnpt.vn/images/refresh_icon.png" style="width: 20px; height: 20px; margin-right: 5px"/><span>THỰC HIỆN LẠI</span></div></div>';
            t.insertAdjacentHTML("beforeend", i),
            document.getElementById("btn-redemo").addEventListener("click", (function() {
                location.reload()
            }
            )),
            document.getElementById("info-tab").addEventListener("click", (function() {
                let e = document.getElementById("validation")
                  , t = document.getElementById("info");
                e.style.display = "none",
                t.style.display = "block"
            }
            )),
            document.getElementById("info-tab1").addEventListener("click", (function() {
                let e = document.getElementById("validation")
                  , t = document.getElementById("info");
                e.style.display = "none",
                t.style.display = "block"
            }
            )),
            document.getElementById("validation-tab").addEventListener("click", (function() {
                let e = document.getElementById("validation")
                  , t = document.getElementById("info");
                e.style.display = "block",
                t.style.display = "none"
            }
            )),
            document.getElementById("validation-tab1").addEventListener("click", (function() {
                let e = document.getElementById("validation")
                  , t = document.getElementById("info");
                e.style.display = "block",
                t.style.display = "none"
            }
            ))
        }()
    }
    function Y(e, t) {
        !function() {
            console.log("ket-qua", e);
            var t = document.getElementById("vnpt_ekyc")
              , i = '<div class="step-4" id="ekyc-step-4"><ul class="progressbar" id="progressbar" style="width:45%;margin-bottom: 27px"><li class="complete" id="progress-step0">Mặt trước</li><li  class="complete" id="progress-step1">Chân dung</li><li  class="complete" id="progress-step2">Kết quả</li></ul><div class="info-wrap"><div class="tabs"><div id="validation" class="tab"><ul class="nav nav-tabs"><li id="info-tab"><div>Thông tin cá nhân</div></li><li id="validation-tab" class="active"><div>Validation</div></li></ul><div class="block-left" id="tab2-content"><div class="item"><div class="label-cus">Loại giấy tờ</div><div class="item-content">' + (n(e) || n(e.ocr) || n(e.ocr.object) ? '<div style="color:red;">Không hợp lệ</div>' : '<div style="color:green;">Hợp lệ</div>') + '</div></div><div class="item"><div class="label-cus">Giấy tờ mờ nhòe/mất góc</div><div class="item-content">' + (n(e) || n(e.ocr) || n(e.ocr.object) ? "" : function(e) {
                let t = "";
                t = n(e) ? '<div style="color:green;">Không</div>' : '<div style="color:red;">Có</div>';
                return t
            }(e.ocr.object.warning)) + '</div></div><div class="item"><div class="label-cus">Chất lượng số ID</div><div class="item-content">' + (n(e) || n(e.ocr) || n(e.ocr.object) ? "" : function(e) {
                let t = JSON.parse(e);
                if (n(t))
                    return '<div style="color: red;">Mờ nhòe</div>';
                for (var i = 0; i < t.length; i++)
                    if (t[i] < .93)
                        return '<div style="color: red;">Mờ nhòe</div>';
                return '<div style="color: green;">Tốt</div>'
            }(e.ocr.object.id_probs)) + '</div></div><div class="item"><div class="label-cus">Chất lượng ngày cấp</div><div class="item-content">' + (n(e) || n(e.ocr) || n(e.ocr.object) ? "" : function(e) {
                if (e < .93)
                    return '<div style="color: red;">Mờ nhòe</div>';
                return '<div style="color: green;">Tốt</div>'
            }(e.ocr.object.issue_date_prob)) + '</div></div><div class="item"><div class="label-cus">Hạn giấy tờ</div><div class="item-content">' + (n(e) || n(e.ocr) || n(e.ocr.object) ? "" : function(e) {
                let t = "";
                t = "no" == e ? '<div style="color:green;">Còn hạn</div>' : '<div style="color:red;">Hết hạn</div>';
                return t
            }(e.ocr.object.expire_warning)) + '</div></div><div class="item"><div class="label-cus">Xác thực giấy tờ</div><div class="item-content">' + (n(e) || n(e.liveness_card_front) || n(e.liveness_card_front.object) ? '<div style="color:red;">Không chụp trực tiếp</div>' : function(e) {
                let t = "";
                t = e ? '<div style="color:red;">Không chụp trực tiếp</div>' : '<div style="color:green;">Chụp trực tiếp</div>';
                return t
            }(e.liveness_card_front.object.fake_liveness)) + '</div></div><div class="item"><div class="label-cus">Cảnh báo trường thông tin</div><div class="item-content">' + (n(e) || n(e.ocr) || n(e.ocr.object) || n(e.ocr.object) ? "" : function(e) {
                const t = {
                    id_sua_xoa: "Số ID bị sửa xóa",
                    id_ko_hop_le: "Số ID không hợp lệ",
                    id_dob_ko_khop: "Mã năm sinh không khớp",
                    id_gender_ko_khop: "Mã giới tính không khớp",
                    id_post_code_ko_khop: "Mã tỉnh/TP không khớp",
                    invalid_dob: "Mã ngày sinh không hợp lệ",
                    den_trang_ko_hop_le: "Giấy tờ photo",
                    fake_printing: "Giấy tờ không hợp lệ",
                    id_invalid_length: "Số ID không hợp lệ"
                };
                let i = ""
                  , n = []
                  , a = [];
                for (var o = 0; o < e.length; o++)
                    "id_ko_hop_le" == e[o] || "id_dob_ko_khop" == e[o] || "id_gender_ko_khop" == e[o] || "id_post_code_ko_khop" == e[o] || "invalid_dob" == e[o] ? n.push(e[o]) : a.push(e[o]);
                if (n.length > 0)
                    for (o = 0; o < n.length; o++)
                        i += '<div style="color:#ff7f00;">' + t[e[o]] + "</div>";
                else if (a.length > 0)
                    for (o = 0; o < a.length; o++)
                        i += '<div style="color:#ff7f00;">' + t[e[o]] + "</div>";
                else
                    i = '<div style="color:green;">Hợp lệ</div>';
                return i
            }(e.ocr.object.tampering.warning)) + '</div></div><div class="item"><div class="label-cus">Dán đè ảnh</div><div class="item-content">' + (n(e) || n(e.liveness_card_front) || n(e.liveness_card_front.object) ? "" : function(e) {
                let t = "";
                t = e ? '<div style="color:red;">Có</div>' : '<div style="color:green;">Không</div>';
                return t
            }(e.liveness_card_front.object.face_swapping)) + '</div></div><div class="item"><div class="label-cus">Mở mắt</div><div class="item-content">' + (n(e) || n(e.liveness_face) || n(e.liveness_face.object) ? "" : function(e) {
                let t = "";
                t = "yes" == e ? '<div style="color:green;">Có</div>' : '<div style="color:red;">Không</div>';
                return t
            }(e.liveness_face.object.is_eye_open)) + '</div></div><div class="item"><div class="label-cus">Mờ mặt</div><div class="item-content">' + (n(e) || n(e.liveness_face) || n(e.liveness_face.object) ? "" : function(e) {
                let t = "";
                t = "no" == e ? '<div style="color:green;">Không</div>' : '<div style="color:red;">Có</div>';
                return t
            }(e.liveness_face.object.blur_face)) + '</div></div><div class="item"><div class="label-cus">Xác thực chân dung</div><div class="item-content">' + (n(e) || n(e.liveness_face) || n(e.liveness_face.object) ? "" : function(e) {
                let t = "";
                t = "success" == e ? '<div style="color:green;">Người thật</div>' : '<div style="color:red;">Không phải người thật</div>';
                return t
            }(e.liveness_face.object.liveness)) + '</div></div><div class="item"></div></div></div><div id="info" class="tab"><ul class="nav nav-tabs"><li id="info-tab1" class="active"><div>Thông tin cá nhân</div></li><li id="validation-tab1"><div>Validation</div></li></ul><div class="block-left"><div class="item"><div class="label-cus">Giấy tờ</div><div class="item-content">' + function() {
                let t = '<div style="color:green;" class="check-info-doc">Hợp lệ</div>';
                n(e) ? (t = '<div style="color:red;" class="check-info-doc">Không hợp lệ</div>',
                console.log("data empty")) : (n(e.ocr) || n(e.ocr.object) ? (t = '<div style="color:red;" class="check-info-doc">Không hợp lệ</div>',
                console.log("ocr || obj empty")) : n(e.ocr.object.expire_warning) || "yes" == e.ocr.object.expire_warning && (t = '<div style="color:red;" class="check-info-doc">Không hợp lệ</div>',
                console.log("data.ocr.object.expire_warning")),
                n(e.liveness_card_front) ? console.log("liveness_card_front || liveness_card_back empty") : (e.liveness_card_front.face_swapping && (t = '<div style="color:red;" class="check-info-doc">Không hợp lệ</div>',
                console.log("data.liveness_card_front.face_swapping")),
                e.liveness_card_front.fake_liveness && (t = '<div style="color:red;" class="check-info-doc">Không hợp lệ</div>',
                console.log("data.liveness_card_front.fake_liveness")),
                e.liveness_card_front.fake_print_photo && (t = '<div style="color:red;" class="check-info-doc">Không hợp lệ</div>',
                console.log("data.liveness_card_front.fake_print_photo"))));
                if (!(n(e) || n(e.ocr) || n(e.ocr.object) || n(e.ocr.object.warning_msg))) {
                    let n = e.ocr.object.warning_msg;
                    t = "";
                    for (var i = 0; i < n.length; i++)
                        t += '<div style="color:#ff7f00;">' + n[i] + "</div>";
                    console.log("data.ocr.object.warning", t)
                }
                return t
            }() + '</div></div><div class="item"><div class="label-cus">Số ID</div><div class="item-content">' + (n(e) || n(e.ocr) || n(e.ocr.object) ? "" : e.ocr.object.id) + '</div></div><div class="item"><div class="label-cus">Họ và tên</div><div class="item-content">' + (n(e) || n(e.ocr) || n(e.ocr.object) ? "" : e.ocr.object.name) + '</div></div><div class="item"><div class="label-cus">Ngày sinh</div><div class="item-content">' + (n(e) || n(e.ocr) || n(e.ocr.object) ? "" : e.ocr.object.birth_day) + '</div></div><div class="item"><div class="label-cus">Nơi ĐKHK TT</div><div class="item-content">' + (n(e) || n(e.ocr) || n(e.ocr.object) ? "" : e.ocr.object.recent_location) + '</div></div><div class="item"><div class="label-cus">Giới tính</div><div class="item-content">' + (n(e) || n(e.ocr) || n(e.ocr.object) ? "" : e.ocr.object.gender) + '</div></div><div class="item"><div class="label-cus">Ngày cấp</div><div class="item-content">' + (n(e) || n(e.ocr) || n(e.ocr.object) ? "" : e.ocr.object.issue_date) + '</div></div><div class="item"><div class="label-cus">Nơi cấp</div><div class="item-content">' + (n(e) || n(e.ocr) || n(e.ocr.object) ? "" : e.ocr.object.issue_place) + '</div></div><div class="item"><div class="label-cus">So sánh</div><div class="item-content">' + (n(e) || n(e.compare) || n(e.compare.object) ? '<div style="color: red;"> Không tìm thấy khuôn mặt </div>' : function(e) {
                let t = "";
                t = "NOMATCH" == e.msg ? '<div style="color: red;">' + e.result + "</div>" : '<div style="color: green;">' + e.result + "</div>";
                return t
            }(e.compare.object)) + '</div></div></div></div></div><div class="images-block"><img class="image-result" src="' + (!n(e) && !n(e.base64_doc_img) && e.base64_doc_img.img_front) + '"/><img class="image-result" src="' + (!n(e) && !n(e.base64_face_img) && e.base64_face_img.img_face_far) + '"/><img class="image-result" src="' + (!n(e) && !n(e.base64_face_img) && e.base64_face_img.img_face_near) + '"/></div></div><div class="btn-redemo" id="btn-redemo"><img src="https://ekyc-web.vnpt.vn/images/refresh_icon.png" style="width: 20px; height: 20px; margin-right: 5px"/><span>THỰC HIỆN LẠI</span></div></div>';
            t.insertAdjacentHTML("beforeend", i),
            document.getElementById("btn-redemo").addEventListener("click", (function() {
                location.reload()
            }
            )),
            document.getElementById("info-tab").addEventListener("click", (function() {
                let e = document.getElementById("validation")
                  , t = document.getElementById("info");
                e.style.display = "none",
                t.style.display = "block"
            }
            )),
            document.getElementById("info-tab1").addEventListener("click", (function() {
                let e = document.getElementById("validation")
                  , t = document.getElementById("info");
                e.style.display = "none",
                t.style.display = "block"
            }
            )),
            document.getElementById("validation-tab").addEventListener("click", (function() {
                let e = document.getElementById("validation")
                  , t = document.getElementById("info");
                e.style.display = "block",
                t.style.display = "none"
            }
            )),
            document.getElementById("validation-tab1").addEventListener("click", (function() {
                let e = document.getElementById("validation")
                  , t = document.getElementById("info");
                e.style.display = "block",
                t.style.display = "none"
            }
            ))
        }()
    }
    function H(e) {
        function t(e, t) {
            if (t) {
                var i = t ? t.split("|") : "";
                return e == i[0] || e == i[1] ? "https://ekyc-web.vnpt.vn/img/checked.svg" : "https://ekyc-web.vnpt.vn/img/fail.svg"
            }
        }
        function i(e, t) {
            if (t) {
                var i = t ? t.split("|") : "";
                return e.toLocaleLowerCase() == i[2].toLocaleLowerCase() ? "https://ekyc-web.vnpt.vn/img/checked.svg" : "https://ekyc-web.vnpt.vn/img/fail.svg"
            }
        }
        function a(e, t) {
            if (t) {
                var i = t ? t.split("|") : null
                  , n = "";
                return e.split("/").join("") === i[3] ? (console.log("true"),
                n = "https://ekyc-web.vnpt.vn/img/checked.svg") : n = "https://ekyc-web.vnpt.vn/img/fail.svg",
                n
            }
        }
        !function() {
            console.log("ket-qua", e);
            var o = document.getElementById("vnpt_ekyc")
              , c = '<div class="step-4" id="ekyc-step-4"><ul class="progressbar" id="progressbar" style="width:45%;margin-bottom: 27px"><li class="complete" id="progress-step0">Mặt trước</li><li  class="complete" id="progress-step1">Mặt sau</li><li  class="complete" id="progress-step2">Chân dung</li><li  class="complete" id="progress-step3">Kết quả</li></ul><div class="info-wrap"><div class="tabs"><div id="validation" class="tab"><ul class="nav nav-tabs"><li id="info-tab"><div>Thông tin cá nhân</div></li><li id="validation-tab" class="active"><div>Validation</div></li><li id="qr-code-tab"><div>QR Code</div></li></ul><div class="block-left" id="tab2-content"><div class="item"><div class="label-cus">Loại giấy tờ</div><div class="item-content">' + (n(e) || n(e.ocr) || n(e.ocr.object) ? '<div style="color:red;">Không hợp lệ</div>' : '<div style="color:green;">Hợp lệ</div>') + '</div></div><div class="item"><div class="label-cus">Mặt trước, sau giấy tờ</div><div class="item-content">' + (n(e) || n(e.ocr) || n(e.ocr.object) ? function(e) {
                let t = "";
                t = n(e && e.errors.find((e=>"Dau vao mat truoc va sau khong cung loai" == e))) ? "" : '<div style="color:red;">Không cùng loại</div>';
                return t
            }(e.orc_err) : function(e, t) {
                let i = "";
                i = e == t ? '<div style="color: green;">Cùng loại</div>' : '<div style="color: red;">Không cùng loại</div>';
                return i
            }(e.ocr.object.back_type_id, e.ocr.object.type_id)) + '</div></div><div class="item"><div class="label-cus">Giấy tờ mờ nhòe/mất góc</div><div class="item-content">' + (n(e) || n(e.ocr) || n(e.ocr.object) ? "" : function(e) {
                let t = "";
                t = n(e) ? '<div style="color:green;">Không</div>' : '<div style="color:red;">Có</div>';
                return t
            }(e.ocr.object.warning)) + '</div></div><div class="item"><div class="label-cus">Chất lượng số ID</div><div class="item-content">' + (n(e) || n(e.ocr) || n(e.ocr.object) ? "" : function(e) {
                let t = JSON.parse(e);
                if (n(t))
                    return '<div style="color: red;">Mờ nhòe</div>';
                for (var i = 0; i < t.length; i++)
                    if (t[i] < .93)
                        return '<div style="color: red;">Mờ nhòe</div>';
                return '<div style="color: green;">Tốt</div>'
            }(e.ocr.object.id_probs)) + '</div></div><div class="item"><div class="label-cus">Chất lượng ngày cấp</div><div class="item-content">' + (n(e) || n(e.ocr) || n(e.ocr.object) ? "" : function(e) {
                if (e < .93)
                    return '<div style="color: red;">Mờ nhòe</div>';
                return '<div style="color: green;">Tốt</div>'
            }(e.ocr.object.issue_date_prob)) + '</div></div><div class="item"><div class="label-cus">Hạn giấy tờ</div><div class="item-content">' + (n(e) || n(e.ocr) || n(e.ocr.object) ? "" : function(e) {
                let t = "";
                t = "no" == e ? '<div style="color:green;">Còn hạn</div>' : '<div style="color:red;">Hết hạn</div>';
                return t
            }(e.ocr.object.expire_warning)) + '</div></div><div class="item"><div class="label-cus">Xác thực giấy tờ</div><div class="item-content">' + (n(e) || n(e.liveness_card_front) || n(e.liveness_card_back) || n(e.liveness_card_front.object) || n(e.liveness_card_back.object) ? "" : function(e, t) {
                let i = "";
                i = e || t ? '<div style="color:red;">Không chụp trực tiếp</div>' : '<div style="color:green;">Chụp trực tiếp</div>';
                return i
            }(e.liveness_card_front.object.fake_liveness, e.liveness_card_back.object.fake_liveness)) + '</div></div><div class="item"><div class="label-cus">Cảnh báo trường thông tin</div><div class="item-content">' + (n(e) || n(e.ocr) || n(e.ocr.object) ? "" : function(e) {
                const t = {
                    id_sua_xoa: "Số ID bị sửa xóa",
                    id_ko_hop_le: "Số ID không hợp lệ",
                    id_dob_ko_khop: "Mã năm sinh không khớp",
                    id_gender_ko_khop: "Mã giới tính không khớp",
                    id_post_code_ko_khop: "Mã tỉnh/TP không khớp",
                    invalid_dob: "Mã ngày sinh không hợp lệ",
                    den_trang_ko_hop_le: "Giấy tờ photo",
                    fake_printing: "Giấy tờ không hợp lệ",
                    id_invalid_length: "Số ID không hợp lệ"
                };
                let i = ""
                  , n = []
                  , a = [];
                for (var o = 0; o < e.length; o++)
                    "id_ko_hop_le" == e[o] || "id_dob_ko_khop" == e[o] || "id_gender_ko_khop" == e[o] || "id_post_code_ko_khop" == e[o] || "invalid_dob" == e[o] ? n.push(e[o]) : a.push(e[o]);
                if (n.length > 0)
                    for (o = 0; o < n.length; o++)
                        i += '<div style="color:#ff7f00;">' + t[e[o]] + "</div>";
                else if (a.length > 0)
                    for (o = 0; o < a.length; o++)
                        i += '<div style="color:#ff7f00;">' + t[e[o]] + "</div>";
                else
                    i = '<div style="color:green;">Hợp lệ</div>';
                return i
            }(e.ocr.object.tampering.warning)) + '</div></div><div class="item"><div class="label-cus">Dán đè ảnh</div><div class="item-content">' + (n(e) || n(e.liveness_card_front) || n(e.liveness_card_front.object) ? "" : function(e) {
                let t = "";
                t = e ? '<div style="color:red;">Có</div>' : '<div style="color:green;">Không</div>';
                return t
            }(e.liveness_card_front.object.face_swapping)) + '</div></div><div class="item"><div class="label-cus">Mở mắt</div><div class="item-content">' + (n(e) || n(e.liveness_face) || n(e.liveness_face.object) ? "" : function(e) {
                let t = "";
                t = "yes" == e ? '<div style="color:green;">Có</div>' : '<div style="color:red;">Không</div>';
                return t
            }(e.liveness_face.object.is_eye_open)) + '</div></div><div class="item"><div class="label-cus">Mờ mặt</div><div class="item-content">' + (n(e) || n(e.liveness_face) || n(e.liveness_face.object) ? "" : function(e) {
                let t = "";
                t = "no" == e ? '<div style="color:green;">Không</div>' : '<div style="color:red;">Có</div>';
                return t
            }(e.liveness_face.object.blur_face)) + '</div></div><div class="item"><div class="label-cus">Xác thực chân dung</div><div class="item-content">' + (n(e) || n(e.liveness_face) || n(e.liveness_face.object) ? "" : function(e) {
                let t = "";
                t = "success" == e ? '<div style="color:green;">Người thật</div>' : '<div style="color:red;">Không phải người thật</div>';
                return t
            }(e.liveness_face.object.liveness)) + '</div></div><div class="item"><div class="label-cus">Mặt bị che</div><div class="item-content">' + (n(e) || n(e.masked) ? "" : function(e) {
                let t = "";
                t = "yes" == e.masked ? '<div style="color:red;">Có</div>' : '<div style="color:green;">Không</div>';
                return t
            }(e.masked.object)) + '</div></div></div></div><div id="qr-code" class="tab"><ul class="nav nav-tabs"><li id="info-tab2"><div>Thông tin cá nhân</div></li><li id="validation-tab2"><div>Validation</div></li><li id="qr-code-tab2" class="active"><div>QR Code</div></li></ul><div class="block-left"><div class="item"><div class="label-cus"><b>Thông tin QR</b></div></div><div class="result-qr-block"><span id="result-qr-data">' + (n(e) ? "" : e.qr_code) + '</span></div><div class="item"><span>Đối chiếu thông tin trên ảnh chụp giấy tờ</span></div><div class="item"><div class="label-cus">Số CMND</div><div class="item-content">' + (n(e) || n(e.ocr) || n(e.ocr.object) ? "" : e.ocr.object.id) + '</div><img src="' + (n(e) || n(e.ocr) || n(e.ocr.object) ? "https://ekyc-web.vnpt.vn/img/fail.svg" : t(e.ocr.object.id, e.qr_code)) + '" width="20px" height="20px"></div><div class="item"><div class="label-cus">Họ và tên</div><div class="item-content">' + (n(e) || n(e.ocr) || n(e.ocr.object) ? "" : e.ocr.object.name) + '</div><img src="' + (n(e) || n(e.ocr) || n(e.ocr.object) ? "https://ekyc-web.vnpt.vn/img/fail.svg" : i(e.ocr.object.name, e.qr_code)) + '" width="20px" height="20px"></div><div class="item"><div class="label-cus">Ngày sinh</div><div class="item-content">' + (n(e) || n(e.ocr) || n(e.ocr.object) ? "" : e.ocr.object.birth_day) + '</div><img src="' + (n(e) || n(e.ocr) || n(e.ocr.object) ? "https://ekyc-web.vnpt.vn/img/fail.svg" : a(e.ocr.object.birth_day, e.qr_code)) + '" width="20px" height="20px"></div></div></div><div id="info" class="tab"><ul class="nav nav-tabs"><li id="info-tab1" class="active"><div>Thông tin cá nhân</div></li><li id="validation-tab1"><div>Validation</div></li><li id="qr-code-tab1"><div>QR Code</div></li></ul><div class="block-left"><div class="item"><div class="label-cus">Giấy tờ</div><div class="item-content">' + function() {
                let t = '<div style="color:green;" class="check-info-doc">Hợp lệ</div>';
                n(e) ? (t = '<div style="color:red;" class="check-info-doc">Không hợp lệ</div>',
                console.log("data empty")) : (n(e.ocr) || n(e.ocr.object) ? (t = '<div style="color:red;" class="check-info-doc">Không hợp lệ</div>',
                console.log("ocr || obj empty")) : n(e.ocr.object.expire_warning) || "yes" == e.ocr.object.expire_warning && (t = '<div style="color:red;" class="check-info-doc">Không hợp lệ</div>',
                console.log("data.ocr.object.expire_warning")),
                n(e.liveness_card_front) || n(e.liveness_card_back) ? (t = '<div style="color:red;" class="check-info-doc">Không hợp lệ</div>',
                console.log("liveness_card_front || liveness_card_back")) : (e.liveness_card_front.face_swapping && (t = '<div style="color:red;" class="check-info-doc">Không hợp lệ</div>',
                console.log("data.liveness_card_front.face_swapping")),
                e.liveness_card_front.fake_liveness && (t = '<div style="color:red;" class="check-info-doc">Không hợp lệ</div>',
                console.log("data.liveness_card_front.fake_liveness")),
                e.liveness_card_front.fake_print_photo && (t = '<div style="color:red;" class="check-info-doc">Không hợp lệ</div>',
                console.log("data.liveness_card_front.fake_print_photo")),
                e.liveness_card_back.face_swapping && (t = '<div style="color:red;" class="check-info-doc">Không hợp lệ</div>',
                console.log("data.liveness_card_back.face_swapping")),
                e.liveness_card_back.fake_liveness && (t = '<div style="color:red;" class="check-info-doc">Không hợp lệ</div>',
                console.log("data.liveness_card_back.face_swapping")),
                e.liveness_card_back.fake_print_photo && (t = '<div style="color:red;" class="check-info-doc">Không hợp lệ</div>',
                console.log("data.liveness_card_back.fake_print_photo"))));
                if (!(n(e) || n(e.ocr) || n(e.ocr.object) || n(e.ocr.object.warning_msg))) {
                    let n = e.ocr.object.warning_msg;
                    t = "";
                    for (var i = 0; i < n.length; i++)
                        t += '<div style="color:#ff7f00;">' + n[i] + "</div>";
                    console.log("data.ocr.object.warning", t)
                }
                return t
            }() + '</div></div><div class="item"><div class="label-cus">Số ID</div><div class="item-content">' + (n(e) || n(e.ocr) || n(e.ocr.object) ? "" : e.ocr.object.id) + '</div></div><div class="item"><div class="label-cus">Họ và tên</div><div class="item-content">' + (n(e) || n(e.ocr) || n(e.ocr.object) ? "" : e.ocr.object.name) + '</div></div><div class="item"><div class="label-cus">Ngày sinh</div><div class="item-content">' + (n(e) || n(e.ocr) || n(e.ocr.object) ? "" : e.ocr.object.birth_day) + '</div></div><div class="item"><div class="label-cus">Nơi ĐKHK TT</div><div class="item-content">' + (n(e) || n(e.ocr) || n(e.ocr.object) ? "" : e.ocr.object.recent_location) + '</div></div><div class="item"><div class="label-cus">Giới tính</div><div class="item-content">' + (n(e) || n(e.ocr) || n(e.ocr.object) ? "" : e.ocr.object.gender) + '</div></div><div class="item"><div class="label-cus">Ngày cấp</div><div class="item-content">' + (n(e) || n(e.ocr) || n(e.ocr.object) ? "" : e.ocr.object.issue_date) + '</div></div><div class="item"><div class="label-cus">Có giá trị đến</div><div class="item-content">' + (n(e) || n(e.ocr) || n(e.ocr.object) ? "" : e.ocr.object.valid_date) + '</div></div><div class="item"><div class="label-cus">Nơi cấp</div><div class="item-content">' + (n(e) || n(e.ocr) || n(e.ocr.object) ? "" : e.ocr.object.issue_place) + '</div></div><div class="item"><div class="label-cus">So sánh</div><div class="item-content">' + (n(e) || n(e.compare) || n(e.compare.object) ? '<div style="color: red;"> Không tìm thấy khuôn mặt </div>' : function(e) {
                let t = "";
                t = "NOMATCH" == e.msg ? '<div style="color: red;">' + e.result + "</div>" : '<div style="color: green;">' + e.result + "</div>";
                return t
            }(e.compare.object)) + '</div></div><div class="item"><div class="label-cus">Kết quả</div><div class="item-content">' + (n(e) || n(e.ocr) || n(e.ocr.object) || t(e.ocr.object.id, e.qr_code) !== a(e.ocr.object.birth_day, e.qr_code) || a(e.ocr.object.birth_day, e.qr_code) !== i(e.ocr.object.name, e.qr_code) || "https://ekyc-web.vnpt.vn/img/checked.svg" !== i(e.ocr.object.name, e.qr_code) ? '<div style="color: red;"> OCR không khớp QR code </div>' : '<div style="color: green;"> OCR khớp QR code </div>') + '</div></div></div></div></div><div class="images-block"><img class="image-result" src="' + (!n(e) && !n(e.base64_doc_img) && e.base64_doc_img.img_front) + '"/><img class="image-result" src="' + (!n(e) && !n(e.base64_doc_img) && e.base64_doc_img.img_back) + '"/><img class="image-result" src="' + (!n(e) && !n(e.base64_face_img) && e.base64_face_img.img_face_far) + '"/><img class="image-result" src="' + (!n(e) && !n(e.base64_face_img) && e.base64_face_img.img_face_near) + '"/></div></div><div class="btn-redemo" id="btn-redemo"><img src="https://ekyc-web.vnpt.vn/images/refresh_icon.png" style="width: 20px; height: 20px; margin-right: 5px"/><span>THỰC HIỆN LẠI</span></div></div>';
            o.insertAdjacentHTML("beforeend", c),
            document.getElementById("btn-redemo").addEventListener("click", (function() {
                location.reload()
            }
            )),
            function() {
                let e = document.getElementById("validation")
                  , t = document.getElementById("info")
                  , i = document.getElementById("qr-code");
                document.getElementById("info-tab").addEventListener("click", (function() {
                    e.style.display = "none",
                    t.style.display = "block",
                    i.style.display = "none"
                }
                )),
                document.getElementById("info-tab1").addEventListener("click", (function() {
                    e.style.display = "none",
                    t.style.display = "block",
                    i.style.display = "none"
                }
                )),
                document.getElementById("info-tab2").addEventListener("click", (function() {
                    e.style.display = "none",
                    t.style.display = "block",
                    i.style.display = "none"
                }
                )),
                document.getElementById("validation-tab").addEventListener("click", (function() {
                    e.style.display = "block",
                    t.style.display = "none",
                    i.style.display = "none"
                }
                )),
                document.getElementById("validation-tab1").addEventListener("click", (function() {
                    e.style.display = "block",
                    t.style.display = "none",
                    i.style.display = "none"
                }
                )),
                document.getElementById("validation-tab2").addEventListener("click", (function() {
                    e.style.display = "block",
                    t.style.display = "none",
                    i.style.display = "none"
                }
                )),
                document.getElementById("qr-code-tab").addEventListener("click", (function() {
                    e.style.display = "none",
                    t.style.display = "none",
                    i.style.display = "block"
                }
                )),
                document.getElementById("qr-code-tab1").addEventListener("click", (function() {
                    e.style.display = "none",
                    t.style.display = "none",
                    i.style.display = "block"
                }
                )),
                document.getElementById("qr-code-tab2").addEventListener("click", (function() {
                    e.style.display = "none",
                    t.style.display = "none",
                    i.style.display = "block"
                }
                ))
            }()
        }()
    }
    function $(e, t, i) {
        !function(e, t, i) {
            !function() {
                localStorage.removeItem("v_ekyc_actk"),
                localStorage.removeItem("gg-tk");
                var a = document.createElement("script");
                a.id = "recapcha_v2_id",
                a.src = "https://www.google.com/recaptcha/api.js?onload=loadCaptcha&render=explicit",
                a.async = !0,
                a.defe = !0;
                var o = document.createElement("script");
                o.id = "piexif_id",
                o.src = "https://cdn.jsdelivr.net/npm/piexifjs@1.0.6/piexif.js",
                o.async = !0,
                o.defe = !0;
                var c = document.createElement("script");
                c.id = "crypto_id",
                c.src = "https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.2/rollups/aes.js",
                c.async = !0,
                c.defe = !0,
                document.head.appendChild(o),
                document.head.appendChild(c);
                var l = function() {
                    const t = e.LIST_ITEM;
                    let i = "<div id='vnpt_ekyc'>";
                    i += "<div class='home-demo-ekyc' id='home-demo-ekyc'>",
                    i += "<div class='title' style='color: " + e.LIST_CHOOSE_STYLE.text_color + "'> <var>HOME.TITLE</var> </div>",
                    i += "<div class='list-choose'>";
                    for (let e of t)
                        -1 == e && (i += "<div class='item' id='verification-id' ><div class='icon-block'><img id='id-icon' src=''/></div><span class='title'><var>HOME.CMT</var></span></div>"),
                        5 == e && (i += "<div class='item' id='verification-passport' > <div class='icon-block'><img id='passport-icon' src=''/></div><span class='title'><var>HOME.PASSPOST</var></span></div>"),
                        7 == e && (i += "<div class='item' id='verification-army-id' ><div class='icon-block'><img id='army-id-icon' src=''/></div><span class='title'><var>HOME.CMT_ARMY</var></span></div>"),
                        6 == e && (i += "<div class='item' id='verification-card-drive'><div class='icon-block'><img id='card-drive-icon' src=''/></div><span class='title'><var>HOME.LICENSE</var></span></div>"),
                        9 == e && (i += "<div class='item' id='id-card-chip'><div class='icon-block'><img id='id-chip-icon' src=''/></div><span class='title'><var>HOME.CMT_CHIP</var></span></div>");
                    return i += (e.ENABLE_GGCAPCHAR,
                    ""),
                    i += "<div class='start-demo' id='start-demo-ekyc' tabindex='6'>",
                    i += "<span class='label-cus'><var>HOME.START</var></span>",
                    i += "</div></div></div></div>",
                    i
                }();
                if (!document.getElementById("vnpt_ekyc")) {
                    var s = document.getElementById(e.PARRENT_ID);
                    -1 === e.TYPE_DOCUMENT ? (s.insertAdjacentHTML("beforeend", "<div id='vnpt_ekyc'></div>"),
                    "DOCUMENT" === e.FLOW_TYPE ? F(-1, e, t, i) : "FACE" === e.FLOW_TYPE && (e.ADVANCE_LIVENESS_FACE ? U(-1, e, t, i) : N(-1, e, t, i))) : 7 === e.TYPE_DOCUMENT ? (s.insertAdjacentHTML("beforeend", "<div id='vnpt_ekyc'></div>"),
                    "DOCUMENT" === e.FLOW_TYPE ? F(7, e, t, i) : "FACE" === e.FLOW_TYPE && (e.ADVANCE_LIVENESS_FACE ? U(7, e, t, i) : N(7, e, t, i))) : 5 === e.TYPE_DOCUMENT ? (s.insertAdjacentHTML("beforeend", "<div id='vnpt_ekyc'></div>"),
                    "DOCUMENT" === e.FLOW_TYPE ? G(5, e, t, i) : "FACE" === e.FLOW_TYPE && (e.ADVANCE_LIVENESS_FACE ? U(5, e, t, i) : N(5, e, t, i))) : 6 === e.TYPE_DOCUMENT ? (s.insertAdjacentHTML("beforeend", "<div id='vnpt_ekyc'></div>"),
                    "DOCUMENT" === e.FLOW_TYPE ? G(6, e, t, i) : "FACE" === e.FLOW_TYPE && (e.ADVANCE_LIVENESS_FACE ? U(6, e, t, i) : N(6, e, t, i))) : 9 === e.TYPE_DOCUMENT ? (s.insertAdjacentHTML("beforeend", "<div id='vnpt_ekyc'></div>"),
                    "DOCUMENT" === e.FLOW_TYPE ? F(9, e, t, i) : "FACE" === e.FLOW_TYPE && (e.ADVANCE_LIVENESS_FACE ? U(9, e, t, i) : N(9, e, t, i))) : ((s = document.getElementById(e.PARRENT_ID)).insertAdjacentHTML("beforeend", l),
                    n(e.LIST_CHOOSE_STYLE) || function() {
                        document.getElementById("id-icon") && (document.getElementById("id-icon").src = e.LIST_CHOOSE_STYLE.id_icon),
                        document.getElementById("passport-icon") && (document.getElementById("passport-icon").src = e.LIST_CHOOSE_STYLE.passport_icon),
                        document.getElementById("card-drive-icon") && (document.getElementById("card-drive-icon").src = e.LIST_CHOOSE_STYLE.drivecard_icon),
                        document.getElementById("army-id-icon") && (document.getElementById("army-id-icon").src = e.LIST_CHOOSE_STYLE.army_id_icon),
                        document.getElementById("id-chip-icon") && (document.getElementById("id-chip-icon").src = e.LIST_CHOOSE_STYLE.id_chip_icon),
                        document.getElementById("start-demo-ekyc").style.background = e.LIST_CHOOSE_STYLE.start_button_background,
                        document.getElementById("start-demo-ekyc").style.color = e.LIST_CHOOSE_STYLE.start_button_color;
                        for (var t = document.getElementsByClassName("icon-block"), i = 0; i < t.length; i++)
                            t[i].style.background = e.LIST_CHOOSE_STYLE.background_icon
                    }())
                }
                var d = ""
                  , r = null;
                function v(t, i) {
                    d = t.id;
                    let n = t.querySelectorAll(".title")[0];
                    t.querySelectorAll(".checkbox")[0],
                    t.style.background = e.LIST_CHOOSE_STYLE.item_active_color,
                    n.style.color = "#FFFFFF",
                    r = i
                }
                function _(t, i) {
                    let n = document.getElementById(d)
                      , a = n.querySelectorAll(".title")[0];
                    n.style.background = "#FFFFFF",
                    a.style.color = "#111127";
                    let o = t.querySelectorAll(".title")[0];
                    t.style.background = e.LIST_CHOOSE_STYLE.item_active_color,
                    o.style.color = "#FFFFFF",
                    d = t.id,
                    r = i
                }
                document.getElementById("verification-id") && document.getElementById("verification-id").addEventListener("click", (function() {
                    n(d) && v(this, -1),
                    d != this.id && _(this, -1)
                }
                )),
                document.getElementById("verification-passport") && document.getElementById("verification-passport").addEventListener("click", (function() {
                    n(d) && v(this, 5),
                    d != this.id && _(this, 5)
                }
                )),
                document.getElementById("verification-army-id") && document.getElementById("verification-army-id").addEventListener("click", (function() {
                    n(d) && v(this, 7),
                    d != this.id && _(this, 7)
                }
                )),
                document.getElementById("verification-card-drive") && document.getElementById("verification-card-drive").addEventListener("click", (function() {
                    n(d) && v(this, 6),
                    d != this.id && _(this, 6)
                }
                )),
                document.getElementById("id-card-chip") && document.getElementById("id-card-chip").addEventListener("click", (function() {
                    n(d) && v(this, 9),
                    d != this.id && _(this, 9)
                }
                )),
                document.getElementById("start-demo-ekyc") && document.getElementById("start-demo-ekyc").addEventListener("click", (function() {
                    n(d) ? alert("Bạn phải chọn loại giấy tờ trước khi tiếp tục") : (document.getElementById("home-demo-ekyc").style.display = "none",
                    5 != r && 6 != r || ("DOCUMENT" === e.FLOW_TYPE ? G(r, e, t, i) : "FACE" === e.FLOW_TYPE && (e.ADVANCE_LIVENESS_FACE ? U(r, e, t, i) : N(r, e, t, i))),
                    -1 != r && 7 != r || ("DOCUMENT" === e.FLOW_TYPE ? F(r, e, t, i) : "FACE" === e.FLOW_TYPE && (e.ADVANCE_LIVENESS_FACE ? U(r, e, t, i) : N(r, e, t, i))),
                    9 == r && ("DOCUMENT" === e.FLOW_TYPE ? F(r, e, t, i) : "FACE" === e.FLOW_TYPE && (e.ADVANCE_LIVENESS_FACE ? U(r, e, t, i) : N(r, e, t, i))))
                }
                ))
            }();
            const a = document.getElementById("home-demo-ekyc");
            a && _(a.getElementsByTagName("var"), e.LANGUAGE)
        }(e, t, i)
    }
    function K(e) {
        return null !== localStorage.getItem(e) && (localStorage.removeItem(e),
        !0)
    }
    function W(e, t, i) {
        let n = document.getElementById("vnpt_ekyc");
        n && n.parentNode.removeChild(n),
        $(e, t, i)
    }
    function q(e, t) {
        9 === e && H(t),
        -1 !== e && 7 !== e || x(t),
        5 != e && 6 !== e || Y(t)
    }
}
]);

TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "hfovMax": 120,
  "cardboardMenu": {
   "opacity": 0.4,
   "fontFamily": "Arial",
   "rollOverBackgroundColor": "#000000",
   "class": "Menu",
   "rollOverFontColor": "#FFFFFF",
   "label": "Media",
   "backgroundColor": "#404040",
   "selectedFontColor": "#FFFFFF",
   "fontColor": "#FFFFFF",
   "id": "Menu_C259D6BA_D22C_9EAB_41E8_CBAD727F9E68",
   "selectedBackgroundColor": "#202020",
   "rollOverOpacity": 0.8,
   "children": [
    {
     "label": "Welcome",
     "click": "this.mainPlayList.set('selectedIndex', 0)",
     "class": "MenuItem"
    },
    {
     "label": "Marketing Office",
     "click": "this.mainPlayList.set('selectedIndex', 1)",
     "class": "MenuItem"
    },
    {
     "label": "Demo Offfice",
     "click": "this.mainPlayList.set('selectedIndex', 2)",
     "class": "MenuItem"
    }
   ]
  },
  "id": "panorama_DCD0D535_D1E4_93B9_41E4_83A3FF7BEBE2",
  "thumbnailUrl": "media/panorama_DCD0D535_D1E4_93B9_41E4_83A3FF7BEBE2_t.jpg",
  "pitch": 0,
  "partial": true,
  "class": "Panorama",
  "label": "Welcome",
  "frames": [
   {
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 4921,
       "width": 4978,
       "url": "media/panorama_DCD0D535_D1E4_93B9_41E4_83A3FF7BEBE2_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 1766,
       "width": 1787,
       "url": "media/panorama_DCD0D535_D1E4_93B9_41E4_83A3FF7BEBE2.jpeg",
       "class": "ImageResourceLevel"
      }
     ]
    },
    "overlays": [
     {
      "enabledInCardboard": true,
      "id": "overlay_DF97A556_D25F_93FB_41E6_4C619B27AAC9",
      "rollOverDisplay": false,
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 1)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 87,
           "width": 127,
           "url": "media/panorama_DCD0D535_D1E4_93B9_41E4_83A3FF7BEBE2_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "yaw": -47.55,
        "hfov": 10.21,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -2.32
       }
      ],
      "items": [
       {
        "yaw": -47.55,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 10.21,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 175,
           "width": 254,
           "url": "media/panorama_DCD0D535_D1E4_93B9_41E4_83A3FF7BEBE2_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -2.32
       }
      ]
     }
    ],
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_DCD0D535_D1E4_93B9_41E4_83A3FF7BEBE2_t.jpg"
   }
  ],
  "hfovMin": 108,
  "vfov": 180,
  "hfov": 200
 },
 {
  "touchControlMode": "drag_rotation",
  "id": "MainViewerPanoramaPlayer",
  "gyroscopeVerticalDraggingEnabled": true,
  "class": "PanoramaPlayer",
  "displayPlaybackBar": true,
  "mouseControlMode": "drag_rotation",
  "viewerArea": "this.MainViewer",
  "preloadEnabled": false
 },
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "id": "sequence_C2596F70_D225_8FB7_41E6_F103450C3C54",
   "movements": [
    {
     "easing": "cubic_in",
     "path": "shortest",
     "targetYaw": 3.25,
     "yawSpeed": 2.33,
     "class": "TargetPanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "path": "shortest",
     "targetYaw": 51.75,
     "yawSpeed": 2.33,
     "class": "TargetPanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "path": "shortest",
     "targetYaw": 55,
     "yawSpeed": 2.33,
     "class": "TargetPanoramaCameraMovement"
    }
   ]
  },
  "id": "panorama_DCD0D535_D1E4_93B9_41E4_83A3FF7BEBE2_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 22,
  "initialPosition": {
   "hfov": 120,
   "yaw": -26.82,
   "class": "PanoramaCameraPosition",
   "pitch": -1.94
  },
  "automaticRotationSpeed": 12
 },
 {
  "hfovMax": 68.15,
  "cardboardMenu": "this.Menu_C259D6BA_D22C_9EAB_41E8_CBAD727F9E68",
  "id": "panorama_DE4EC1E9_D22C_92A9_41BD_F84E47F419A8",
  "thumbnailUrl": "media/panorama_DE4EC1E9_D22C_92A9_41BD_F84E47F419A8_t.jpg",
  "pitch": 0,
  "partial": false,
  "class": "Panorama",
  "label": "Marketing Office",
  "frames": [
   {
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 1148,
       "width": 8568,
       "url": "media/panorama_DE4EC1E9_D22C_92A9_41BD_F84E47F419A8_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 431,
       "width": 3217,
       "url": "media/panorama_DE4EC1E9_D22C_92A9_41BD_F84E47F419A8.jpeg",
       "class": "ImageResourceLevel"
      }
     ]
    },
    "overlays": [
     {
      "enabledInCardboard": true,
      "id": "overlay_DC26D941_D264_93D8_41E5_CF031216E759",
      "rollOverDisplay": false,
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 2)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 115,
           "width": 115,
           "url": "media/panorama_DE4EC1E9_D22C_92A9_41BD_F84E47F419A8_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "yaw": -73.91,
        "hfov": 9.54,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -10.5
       }
      ],
      "items": [
       {
        "yaw": -73.91,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 9.54,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 230,
           "width": 230,
           "url": "media/panorama_DE4EC1E9_D22C_92A9_41BD_F84E47F419A8_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -10.5
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "id": "overlay_DC48C809_D264_9169_41DC_49C7AD1F3DBC",
      "rollOverDisplay": false,
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_DD5762A5_D27C_F158_41E8_D13ED6D445E6, {'pressedBorderColor':'#FF0000','backgroundOpacity':0.3,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'borderColor':'#FF0000','pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingBottom':5,'iconHeight':20,'pressedIconColor':'#888888','rollOverBackgroundColorDirection':'vertical','rollOverBorderSize':3,'pressedBackgroundOpacity':0.3,'paddingTop':5,'pressedIconWidth':20,'iconWidth':20,'rollOverIconHeight':20,'rollOverIconWidth':20,'paddingLeft':5,'rollOverBackgroundOpacity':0.3,'rollOverIconColor':'#666666','iconColor':'#000000','backgroundColorDirection':'vertical','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconHeight':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#FF0000','pressedBorderSize':3,'rollOverIconLineWidth':5,'backgroundColorRatios':[0,0.09803921568627451,1],'borderSize':3,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'paddingRight':5}) } else { this.showPopupMedia(this.window_C21A84E8_D27C_F2D7_41C9_64233F8F3E64, this.video_C32B1385_D264_B758_41DA_9548CCC43022, this.PlayList_C26E998D_D264_7369_41D1_F371A054F3D5, '90%', '90%', true, true); this.PlayList_C26E998D_D264_7369_41D1_F371A054F3D5.set('selectedIndex', 0); ; this.viewer_uidC26B498D_D264_7369_41E7_33F8ECB45A6EVideoPlayer.play();  }",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 57,
           "width": 69,
           "url": "media/panorama_DE4EC1E9_D22C_92A9_41BD_F84E47F419A8_0_HS_1_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "yaw": 25.39,
        "hfov": 5.77,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": 7.78
       }
      ],
      "items": [
       {
        "yaw": 25.39,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 5.77,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 115,
           "width": 138,
           "url": "media/panorama_DE4EC1E9_D22C_92A9_41BD_F84E47F419A8_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": 7.78
       }
      ]
     },
     {
      "rotationX": 0,
      "hideEasing": "cubic_out",
      "rotationZ": 0,
      "yaw": 25.39,
      "hfov": 5.77,
      "class": "PopupPanoramaOverlay",
      "popupMaxWidth": "90%",
      "showEasing": "cubic_in",
      "showDuration": 500,
      "hideDuration": 500,
      "id": "popup_DD5762A5_D27C_F158_41E8_D13ED6D445E6",
      "loop": false,
      "video": {
       "webmUrl": "media/video_C32B1385_D264_B758_41DA_9548CCC43022.webm",
       "width": 640,
       "mp4Url": "media/video_C32B1385_D264_B758_41DA_9548CCC43022.mp4",
       "class": "VideoResource",
       "height": 360
      },
      "popupMaxHeight": "90%",
      "autoplay": true,
      "rotationY": 0,
      "pitch": 7.78
     }
    ],
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_DE4EC1E9_D22C_92A9_41BD_F84E47F419A8_t.jpg"
   }
  ],
  "hfovMin": 60,
  "vfov": 48.24,
  "hfov": 360
 },
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "id": "panorama_DE4EC1E9_D22C_92A9_41BD_F84E47F419A8_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 60,
   "yaw": 38.38,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "hfovMax": 120,
  "id": "panorama_DF0F02AC_D23C_96AF_41D9_55A3D15A48CC",
  "thumbnailUrl": "media/panorama_DF0F02AC_D23C_96AF_41D9_55A3D15A48CC_t.jpg",
  "pitch": 14.42,
  "partial": true,
  "class": "Panorama",
  "label": "Demo Offfice",
  "cardboardMenu": "this.Menu_C259D6BA_D22C_9EAB_41E8_CBAD727F9E68",
  "frames": [
   {
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 1003,
       "width": 6434,
       "url": "media/panorama_DF0F02AC_D23C_96AF_41D9_55A3D15A48CC_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 390,
       "width": 2502,
       "url": "media/panorama_DF0F02AC_D23C_96AF_41D9_55A3D15A48CC.jpeg",
       "class": "ImageResourceLevel"
      }
     ]
    },
    "overlays": [
     {
      "enabledInCardboard": true,
      "id": "overlay_C28C463D_D25C_91A9_41E6_8A4FFF411E59",
      "rollOverDisplay": false,
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 1)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 69,
           "width": 67,
           "url": "media/panorama_DF0F02AC_D23C_96AF_41D9_55A3D15A48CC_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "yaw": 31,
        "hfov": 5.91,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": 0.26
       }
      ],
      "items": [
       {
        "yaw": 31,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 5.91,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 138,
           "width": 135,
           "url": "media/panorama_DF0F02AC_D23C_96AF_41D9_55A3D15A48CC_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": 0.26
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "id": "overlay_C25CCCF4_D224_F2B8_41C0_5FDE59436A85",
      "rollOverDisplay": false,
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 0)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 86,
           "width": 86,
           "url": "media/panorama_DF0F02AC_D23C_96AF_41D9_55A3D15A48CC_0_HS_1_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "yaw": 117.11,
        "hfov": 7.54,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -1.5
       }
      ],
      "items": [
       {
        "yaw": 117.11,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 7.54,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 173,
           "width": 173,
           "url": "media/panorama_DF0F02AC_D23C_96AF_41D9_55A3D15A48CC_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -1.5
       }
      ]
     }
    ],
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_DF0F02AC_D23C_96AF_41D9_55A3D15A48CC_t.jpg"
   }
  ],
  "hfovMin": 60,
  "vfov": 43.65,
  "hfov": 280
 },
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "id": "sequence_C3810F10_D224_8F78_41D1_D8C5B32C85B1",
   "movements": [
    {
     "easing": "cubic_in",
     "path": "shortest",
     "targetYaw": 5.25,
     "yawSpeed": 4.14,
     "class": "TargetPanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "path": "shortest",
     "targetYaw": 89.75,
     "yawSpeed": 4.14,
     "class": "TargetPanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "path": "shortest",
     "targetYaw": 95,
     "yawSpeed": 4.14,
     "class": "TargetPanoramaCameraMovement"
    }
   ]
  },
  "id": "panorama_DF0F02AC_D23C_96AF_41D9_55A3D15A48CC_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 14.17,
   "class": "PanoramaCameraPosition",
   "pitch": 14.42
  }
 },
 {
  "id": "mainPlayList",
  "class": "PlayList",
  "items": [
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_DCD0D535_D1E4_93B9_41E4_83A3FF7BEBE2",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_DCD0D535_D1E4_93B9_41E4_83A3FF7BEBE2_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_DE4EC1E9_D22C_92A9_41BD_F84E47F419A8",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_DE4EC1E9_D22C_92A9_41BD_F84E47F419A8_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_DF0F02AC_D23C_96AF_41D9_55A3D15A48CC",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_DF0F02AC_D23C_96AF_41D9_55A3D15A48CC_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 0)"
   }
  ]
 },
 {
  "id": "playList_DC0DC7FB_D25C_9EA9_41C2_8569F8FD03E7",
  "class": "PlayList",
  "items": [
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_DCD0D535_D1E4_93B9_41E4_83A3FF7BEBE2",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_DCD0D535_D1E4_93B9_41E4_83A3FF7BEBE2_camera",
    "begin": "this.setEndToItemIndex(this.playList_DC0DC7FB_D25C_9EA9_41C2_8569F8FD03E7, 0, 1)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_DE4EC1E9_D22C_92A9_41BD_F84E47F419A8",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_DE4EC1E9_D22C_92A9_41BD_F84E47F419A8_camera",
    "begin": "this.setEndToItemIndex(this.playList_DC0DC7FB_D25C_9EA9_41C2_8569F8FD03E7, 1, 2)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_DF0F02AC_D23C_96AF_41D9_55A3D15A48CC",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_DF0F02AC_D23C_96AF_41D9_55A3D15A48CC_camera",
    "begin": "this.setEndToItemIndex(this.playList_DC0DC7FB_D25C_9EA9_41C2_8569F8FD03E7, 2, 0)"
   }
  ]
 },
 {
  "label": "Student Testimonial",
  "class": "Video",
  "video": {
   "webmUrl": "media/video_C32B1385_D264_B758_41DA_9548CCC43022.webm",
   "width": 640,
   "mp4Url": "media/video_C32B1385_D264_B758_41DA_9548CCC43022.mp4",
   "class": "VideoResource",
   "height": 360
  },
  "width": 640,
  "id": "video_C32B1385_D264_B758_41DA_9548CCC43022",
  "loop": false,
  "height": 360,
  "scaleMode": "fit_inside",
  "thumbnailUrl": "media/video_C32B1385_D264_B758_41DA_9548CCC43022_t.jpg"
 },
 {
  "id": "PlayList_C26E998D_D264_7369_41D1_F371A054F3D5",
  "class": "PlayList",
  "items": [
   {
    "begin": "this.fixTogglePlayPauseButton(this.viewer_uidC26B498D_D264_7369_41E7_33F8ECB45A6EVideoPlayer)",
    "media": "this.video_C32B1385_D264_B758_41DA_9548CCC43022",
    "class": "VideoPlayListItem",
    "player": {
     "displayPlaybackBar": true,
     "id": "viewer_uidC26B498D_D264_7369_41E7_33F8ECB45A6EVideoPlayer",
     "class": "VideoPlayer",
     "viewerArea": {
      "playbackBarHeight": 10,
      "progressBackgroundColor": [
       "#FFFFFF"
      ],
      "paddingRight": 0,
      "playbackBarBorderColor": "#FFFFFF",
      "progressLeft": 0,
      "toolTipBackgroundColor": "#F6F6F6",
      "toolTipFontColor": "#606060",
      "toolTipShadowHorizontalLength": 0,
      "playbackBarProgressOpacity": 1,
      "toolTipBorderSize": 1,
      "toolTipPaddingBottom": 4,
      "playbackBarBorderSize": 0,
      "minWidth": 100,
      "progressBottom": 2,
      "toolTipBorderColor": "#767676",
      "shadow": false,
      "playbackBarHeadBorderColor": "#000000",
      "progressBarOpacity": 1,
      "transitionMode": "blending",
      "progressOpacity": 1,
      "toolTipTextShadowBlurRadius": 3,
      "paddingBottom": 0,
      "progressBackgroundColorRatios": [
       0
      ],
      "progressRight": 0,
      "playbackBarHeadShadowBlurRadius": 3,
      "toolTipShadowOpacity": 1,
      "toolTipPaddingTop": 4,
      "progressBackgroundOpacity": 1,
      "playbackBarHeadHeight": 15,
      "progressBarBorderSize": 0,
      "toolTipShadowVerticalLength": 0,
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "paddingTop": 0,
      "playbackBarProgressBorderRadius": 0,
      "class": "ViewerArea",
      "playbackBarLeft": 0,
      "progressBarBackgroundColorDirection": "vertical",
      "playbackBarBackgroundColor": [
       "#FFFFFF"
      ],
      "toolTipTextShadowOpacity": 0,
      "progressBarBorderRadius": 0,
      "toolTipOpacity": 1,
      "progressHeight": 10,
      "playbackBarHeadWidth": 6,
      "progressBarBackgroundColorRatios": [
       0
      ],
      "progressBarBorderColor": "#000000",
      "playbackBarHeadOpacity": 1,
      "playbackBarHeadShadowHorizontalLength": 0,
      "toolTipShadowSpread": 0,
      "progressBackgroundColorDirection": "vertical",
      "playbackBarBackgroundOpacity": 1,
      "progressBorderSize": 0,
      "borderRadius": 0,
      "playbackBarHeadShadow": true,
      "playbackBarBottom": 0,
      "toolTipFontStyle": "normal",
      "paddingLeft": 0,
      "progressBarBackgroundColor": [
       "#3399FF"
      ],
      "toolTipBorderRadius": 3,
      "playbackBarHeadBackgroundColorDirection": "vertical",
      "progressBorderColor": "#000000",
      "height": "100%",
      "playbackBarOpacity": 1,
      "borderSize": 0,
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "width": "100%",
      "toolTipFontFamily": "Arial",
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "minHeight": 50,
      "playbackBarHeadShadowColor": "#000000",
      "playbackBarProgressBackgroundColor": [
       "#3399FF"
      ],
      "playbackBarHeadShadowOpacity": 0.7,
      "playbackBarBorderRadius": 0,
      "playbackBarHeadBorderSize": 0,
      "toolTipTextShadowColor": "#000000",
      "toolTipPaddingLeft": 6,
      "id": "viewer_uidC25C86BA_D22C_9EAB_41DA_96D432159CC3",
      "playbackBarHeadBorderRadius": 0,
      "toolTipPaddingRight": 6,
      "toolTipShadowColor": "#333333",
      "toolTipShadowBlurRadius": 3,
      "progressBorderRadius": 0,
      "playbackBarHeadShadowVerticalLength": 0,
      "playbackBarProgressBorderColor": "#000000",
      "toolTipFontWeight": "normal",
      "playbackBarProgressBorderSize": 0,
      "playbackBarBackgroundColorDirection": "vertical",
      "playbackBarRight": 0,
      "toolTipFontSize": 12,
      "playbackBarProgressBackgroundColorRatios": [
       0
      ]
     }
    },
    "start": "this.viewer_uidC26B498D_D264_7369_41E7_33F8ECB45A6EVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_C26E998D_D264_7369_41D1_F371A054F3D5, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_C26E998D_D264_7369_41D1_F371A054F3D5, 0, this.video_C32B1385_D264_B758_41DA_9548CCC43022)"
   }
  ]
 },
 "this.Menu_C259D6BA_D22C_9EAB_41E8_CBAD727F9E68",
 {
  "closeButtonPressedBackgroundColorDirection": "vertical",
  "closeButtonPaddingTop": 5,
  "titlePaddingTop": 5,
  "titlePaddingBottom": 5,
  "closeButtonPaddingLeft": 5,
  "paddingRight": 0,
  "bodyBackgroundOpacity": 0,
  "overflow": "scroll",
  "backgroundColor": [],
  "shadowBlurRadius": 6,
  "closeButtonPressedBackgroundOpacity": 0.3,
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "modal": true,
  "scrollBarMargin": 2,
  "closeButtonPressedIconLineWidth": 5,
  "headerPaddingRight": 0,
  "closeButtonPaddingRight": 5,
  "gap": 10,
  "bodyPaddingRight": 0,
  "minWidth": 20,
  "closeButtonRollOverIconLineWidth": 5,
  "hideEffect": {
   "easing": "cubic_in_out",
   "duration": 500,
   "class": "FadeOutEffect"
  },
  "horizontalAlign": "center",
  "shadow": true,
  "scrollBarWidth": 10,
  "bodyPaddingBottom": 0,
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "layout": "vertical",
  "closeButtonRollOverBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "paddingBottom": 0,
  "shadowSpread": 1,
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "closeButtonPressedBorderSize": 3,
  "scrollBarColor": "#000000",
  "closeButtonBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "scrollBarOpacity": 0.5,
  "closeButtonBackgroundColorDirection": "vertical",
  "scrollBarVisible": "rollOver",
  "paddingTop": 0,
  "shadowColor": "#000000",
  "class": "Window",
  "backgroundColorDirection": "vertical",
  "closeButtonBackgroundOpacity": 0.3,
  "footerBackgroundColorDirection": "vertical",
  "closeButtonPressedIconColor": "#888888",
  "titleFontSize": 14,
  "children": [
   "this.viewer_uidC25C86BA_D22C_9EAB_41DA_96D432159CC3"
  ],
  "closeButtonBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "titlePaddingRight": 5,
  "backgroundOpacity": 1,
  "closeButtonRollOverBorderColor": "#FF0000",
  "closeButtonBorderColor": "#FF0000",
  "bodyPaddingTop": 0,
  "closeButtonRollOverBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "borderRadius": 5,
  "paddingLeft": 0,
  "footerHeight": 5,
  "headerVerticalAlign": "middle",
  "closeButtonBorderRadius": 0,
  "titleFontFamily": "Arial",
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "closeButtonPaddingBottom": 5,
  "closeButtonPressedBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "footerBackgroundOpacity": 0,
  "borderSize": 0,
  "shadowOpacity": 0.5,
  "closeButtonRollOverBackgroundColorDirection": "vertical",
  "closeButtonRollOverIconColor": "#666666",
  "veilShowEffect": {
   "easing": "cubic_in_out",
   "duration": 500,
   "class": "FadeInEffect"
  },
  "veilColorRatios": [
   0,
   1
  ],
  "headerBackgroundOpacity": 0,
  "minHeight": 20,
  "bodyPaddingLeft": 0,
  "closeButtonIconWidth": 20,
  "closeButtonBorderSize": 3,
  "bodyBackgroundColorDirection": "vertical",
  "headerBackgroundColorDirection": "vertical",
  "close": "this.PlayList_C26E998D_D264_7369_41D1_F371A054F3D5.set('selectedIndex', -1);",
  "closeButtonRollOverBorderSize": 3,
  "closeButtonIconHeight": 20,
  "id": "window_C21A84E8_D27C_F2D7_41C9_64233F8F3E64",
  "veilOpacity": 0.4,
  "closeButtonRollOverBackgroundOpacity": 0.3,
  "contentOpaque": false,
  "veilHideEffect": {
   "easing": "cubic_in_out",
   "duration": 500,
   "class": "FadeOutEffect"
  },
  "shadowVerticalLength": 0,
  "closeButtonIconLineWidth": 5,
  "closeButtonIconColor": "#000000",
  "headerPaddingLeft": 10,
  "showEffect": {
   "easing": "cubic_in_out",
   "duration": 500,
   "class": "FadeInEffect"
  },
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "shadowHorizontalLength": 3,
  "titlePaddingLeft": 5,
  "headerPaddingBottom": 5,
  "backgroundColorRatios": [],
  "closeButtonPressedBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "verticalAlign": "middle",
  "headerPaddingTop": 10,
  "closeButtonPressedBorderColor": "#FF0000"
 },
 "this.popup_DD5762A5_D27C_F158_41E8_D13ED6D445E6"
], "children": [
 {
  "playbackBarHeight": 10,
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "paddingRight": 0,
  "playbackBarBorderColor": "#FFFFFF",
  "progressLeft": 0,
  "toolTipBackgroundColor": "#F6F6F6",
  "toolTipFontColor": "#606060",
  "toolTipShadowHorizontalLength": 0,
  "playbackBarProgressOpacity": 1,
  "toolTipBorderSize": 1,
  "toolTipPaddingBottom": 4,
  "playbackBarBorderSize": 0,
  "minWidth": 100,
  "progressBottom": 0,
  "toolTipBorderColor": "#767676",
  "shadow": false,
  "playbackBarHeadBorderColor": "#000000",
  "progressBarOpacity": 1,
  "transitionMode": "blending",
  "progressOpacity": 1,
  "toolTipTextShadowBlurRadius": 3,
  "paddingBottom": 0,
  "progressBackgroundColorRatios": [
   0
  ],
  "progressRight": 0,
  "playbackBarHeadShadowBlurRadius": 3,
  "toolTipShadowOpacity": 1,
  "toolTipPaddingTop": 4,
  "progressBackgroundOpacity": 1,
  "playbackBarHeadHeight": 15,
  "progressBarBorderSize": 0,
  "toolTipShadowVerticalLength": 0,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "paddingTop": 0,
  "playbackBarProgressBorderRadius": 0,
  "class": "ViewerArea",
  "playbackBarLeft": 0,
  "progressBarBackgroundColorDirection": "vertical",
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "toolTipTextShadowOpacity": 0,
  "progressBarBorderRadius": 0,
  "toolTipOpacity": 1,
  "progressHeight": 10,
  "playbackBarHeadWidth": 6,
  "progressBarBackgroundColorRatios": [
   0
  ],
  "progressBarBorderColor": "#000000",
  "playbackBarHeadOpacity": 1,
  "playbackBarHeadShadowHorizontalLength": 0,
  "toolTipShadowSpread": 0,
  "progressBackgroundColorDirection": "vertical",
  "playbackBarBackgroundOpacity": 1,
  "progressBorderSize": 0,
  "borderRadius": 0,
  "playbackBarHeadShadow": true,
  "playbackBarBottom": 5,
  "toolTipFontStyle": "normal",
  "paddingLeft": 0,
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "toolTipBorderRadius": 3,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "progressBorderColor": "#000000",
  "height": "100%",
  "playbackBarOpacity": 1,
  "borderSize": 0,
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "width": "100%",
  "toolTipFontFamily": "Arial",
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "minHeight": 50,
  "playbackBarHeadShadowColor": "#000000",
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "playbackBarHeadShadowOpacity": 0.7,
  "playbackBarBorderRadius": 0,
  "playbackBarHeadBorderSize": 0,
  "toolTipTextShadowColor": "#000000",
  "toolTipPaddingLeft": 6,
  "id": "MainViewer",
  "playbackBarHeadBorderRadius": 0,
  "toolTipPaddingRight": 6,
  "toolTipShadowColor": "#333333",
  "toolTipShadowBlurRadius": 3,
  "progressBorderRadius": 0,
  "playbackBarHeadShadowVerticalLength": 0,
  "playbackBarProgressBorderColor": "#000000",
  "toolTipFontWeight": "normal",
  "playbackBarProgressBorderSize": 0,
  "playbackBarBackgroundColorDirection": "vertical",
  "playbackBarRight": 0,
  "toolTipFontSize": 12,
  "playbackBarProgressBackgroundColorRatios": [
   0
  ]
 },
 {
  "children": [
   {
    "itemPaddingTop": 3,
    "itemPaddingLeft": 3,
    "itemThumbnailScaleMode": "fit_outside",
    "itemLabelFontWeight": "normal",
    "paddingRight": 20,
    "verticalAlign": "top",
    "itemOpacity": 1,
    "itemThumbnailOpacity": 1,
    "borderRadius": 5,
    "itemLabelTextDecoration": "none",
    "maxHeight": 600,
    "backgroundColor": [
     "#000000"
    ],
    "paddingLeft": 20,
    "scrollBarMargin": 2,
    "selectedItemLabelFontWeight": "bold",
    "itemThumbnailShadowVerticalLength": 3,
    "itemHorizontalAlign": "center",
    "borderSize": 0,
    "itemLabelHorizontalAlign": "center",
    "maxWidth": 800,
    "itemLabelGap": 5,
    "itemBackgroundColorRatios": [],
    "itemThumbnailWidth": 100,
    "itemThumbnailHeight": 75,
    "minWidth": 0,
    "scrollBarWidth": 10,
    "itemVerticalAlign": "middle",
    "gap": 10,
    "horizontalAlign": "left",
    "shadow": false,
    "itemBorderRadius": 0,
    "layout": "horizontal",
    "minHeight": 0,
    "paddingBottom": 10,
    "itemLabelFontColor": "#FFFFFF",
    "itemPaddingBottom": 3,
    "playList": "this.playList_DC0DC7FB_D25C_9EA9_41C2_8569F8FD03E7",
    "itemBackgroundColor": [],
    "itemThumbnailShadowOpacity": 0.8,
    "scrollBarColor": "#FFFFFF",
    "itemBackgroundOpacity": 0,
    "itemThumbnailShadowSpread": 1,
    "itemMode": "normal",
    "paddingTop": 10,
    "scrollBarOpacity": 0.5,
    "itemThumbnailShadowHorizontalLength": 3,
    "scrollBarVisible": "rollOver",
    "class": "ThumbnailList",
    "itemLabelFontStyle": "normal",
    "backgroundColorDirection": "vertical",
    "itemLabelFontFamily": "Arial",
    "itemThumbnailShadowColor": "#000000",
    "itemThumbnailShadowBlurRadius": 4,
    "itemThumbnailShadow": true,
    "itemLabelFontSize": 14,
    "itemBackgroundColorDirection": "vertical",
    "backgroundColorRatios": [
     0
    ],
    "itemThumbnailBorderRadius": 5,
    "itemLabelPosition": "bottom",
    "backgroundOpacity": 0.2,
    "itemPaddingRight": 3
   }
  ],
  "paddingRight": 0,
  "verticalAlign": "bottom",
  "overflow": "visible",
  "borderRadius": 0,
  "height": 200,
  "paddingLeft": 0,
  "scrollBarMargin": 2,
  "layout": "horizontal",
  "gap": 10,
  "borderSize": 0,
  "minWidth": 20,
  "scrollBarWidth": 10,
  "horizontalAlign": "center",
  "shadow": false,
  "bottom": 0,
  "minHeight": 20,
  "paddingBottom": 0,
  "scrollBarColor": "#000000",
  "scrollBarOpacity": 0.5,
  "scrollBarVisible": "rollOver",
  "paddingTop": 0,
  "class": "Container",
  "contentOpaque": false,
  "left": 0,
  "right": 0,
  "backgroundOpacity": 0
 },
 {
  "paddingRight": 0,
  "backgroundColor": [
   "#000000"
  ],
  "paddingLeft": 0,
  "borderRadius": 0,
  "borderSize": 0,
  "minWidth": 0,
  "shadow": false,
  "top": 0,
  "visible": false,
  "minHeight": 0,
  "paddingBottom": 0,
  "bottom": 0,
  "id": "veilPopupPanorama",
  "paddingTop": 0,
  "class": "UIComponent",
  "backgroundColorDirection": "vertical",
  "showEffect": {
   "easing": "cubic_in_out",
   "duration": 350,
   "class": "FadeInEffect"
  },
  "left": 0,
  "right": 0,
  "backgroundColorRatios": [
   0
  ],
  "backgroundOpacity": 0.55
 },
 {
  "paddingRight": 0,
  "backgroundColor": [],
  "paddingLeft": 0,
  "borderRadius": 0,
  "borderSize": 0,
  "minWidth": 0,
  "shadow": false,
  "top": 0,
  "visible": false,
  "minHeight": 0,
  "paddingBottom": 0,
  "scaleMode": "custom",
  "bottom": 0,
  "id": "zoomImagePopupPanorama",
  "paddingTop": 0,
  "class": "ZoomImage",
  "backgroundColorDirection": "vertical",
  "left": 0,
  "right": 0,
  "backgroundColorRatios": [],
  "backgroundOpacity": 1
 },
 {
  "label": "",
  "iconHeight": 20,
  "paddingRight": 5,
  "verticalAlign": "middle",
  "fontSize": 12,
  "mode": "push",
  "backgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "shadowBlurRadius": 6,
  "paddingLeft": 5,
  "iconWidth": 20,
  "gap": 5,
  "borderRadius": 0,
  "textDecoration": "none",
  "fontFamily": "Arial",
  "rollOverIconColor": "#666666",
  "borderSize": 0,
  "minWidth": 0,
  "shadow": false,
  "fontStyle": "normal",
  "iconBeforeLabel": true,
  "horizontalAlign": "center",
  "top": 10,
  "fontWeight": "normal",
  "cursor": "hand",
  "visible": false,
  "minHeight": 0,
  "paddingBottom": 5,
  "borderColor": "#000000",
  "fontColor": "#FFFFFF",
  "id": "closeButtonPopupPanorama",
  "shadowSpread": 1,
  "pressedIconColor": "#888888",
  "shadowColor": "#000000",
  "iconLineWidth": 5,
  "layout": "horizontal",
  "paddingTop": 5,
  "class": "CloseButton",
  "iconColor": "#000000",
  "backgroundColorDirection": "vertical",
  "showEffect": {
   "easing": "cubic_in_out",
   "duration": 350,
   "class": "FadeInEffect"
  },
  "right": 10,
  "backgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "backgroundOpacity": 0.3
 }
], 
 "paddingRight": 0,
 "verticalAlign": "top",
 "overflow": "visible",
 "borderRadius": 0,
 "mouseWheelEnabled": true,
 "height": "100%",
 "scrollBarMargin": 2,
 "paddingLeft": 0,
 "gap": 10,
 "width": "100%",
 "borderSize": 0,
 "minWidth": 20,
 "layout": "absolute",
 "shadow": false,
 "horizontalAlign": "left",
 "scrollBarWidth": 10,
 "minHeight": 20,
 "paddingBottom": 0,
 "scripts": {
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "startPanoramaWithCamera": function(panorama, camera){  var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == panorama && item.get('class') == 'PanoramaPlayListItem'){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { var restoreCameraOnStop = function(){ for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); } restoreItems[0].item.unbind('stop', restoreCameraOnStop, this); }; restoreItems[0].item.bind('stop', restoreCameraOnStop, this); } },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "getKey": function(key){  return window[key]; },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "registerKey": function(key, value){  window[key] = value; },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "existsKey": function(key){  return key in window; },
  "resumeGlobalAudios": function(caller){  if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller) return; window.currentGlobalAudiosActionCaller = undefined; var audios = window.currentGlobalAudios; if(!audios) return; for(var audio in audios){ audios[audio].play(); } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('text') == '' || component.get('text') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); }; },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('visible', true); htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('visible', false); htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "autotriggerAtStart": function(player, callback){  var stateChangeFunction = function(event){ if(event.data.state == 'playing'){ callback(); player.unbind('stateChange', stateChangeFunction, this); } }; player.bind('stateChange', stateChangeFunction, this); },
  "unregisterKey": function(key){  delete window[key]; },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else if(player.get('state') == 'playing') { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var self = this; var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, self); playList.unbind('change', changePlayListFunction, self); } }; if(endFunction){ var playListItem = playList.get('items')[index]; var playListItemClass = playListItem.get('class'); if(playListItemClass == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){  var audios = window.currentGlobalAudios; if(!audios) return; var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "pauseGlobalAudios": function(caller){  var audios = window.currentGlobalAudios; window.currentGlobalAudiosActionCaller = caller; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(a.get('state') == 'playing') a.pause(); } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; }
 },
 "id": "rootPlayer",
 "backgroundPreloadEnabled": true,
 "paddingTop": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "contentOpaque": false,
 "class": "Player",
 "scrollBarColor": "#000000",
 "vrPolyfillScale": 0.63,
 "start": "this.syncPlaylists([this.playList_DC0DC7FB_D25C_9EA9_41C2_8569F8FD03E7,this.mainPlayList]); this.mainPlayList.set('selectedIndex', 0)"
})
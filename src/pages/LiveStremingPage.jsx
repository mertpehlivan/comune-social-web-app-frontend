import React, { useEffect, useRef } from 'react';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { Box, Stack } from '@mui/material';
import Logo from '../assets/2.svg'
function randomID(len) {
  let result = '';
  if (result) return result;
  var chars = '12345qwertyuiopasdfgh67890jklmnbvcxzMNBVCZXASDQWERTYHGFUIOLKJP',
    maxPos = chars.length,
    i;
  len = len || 5;
  for (i = 0; i < len; i++) {
    result += chars.charAt(Math.floor(Math.random() * maxPos));
  }
  return result;
}

export function getUrlParams(
  url = window.location.href
) {
  let urlStr = url.split('?')[1];
  return new URLSearchParams(urlStr);
}

export default function LiveStreamingPage() {
  const roomID = getUrlParams().get('roomID') || randomID(5);
  let role_str = getUrlParams(window.location.href).get('role') || 'Host';
  const role =
    role_str === 'Host'
      ? ZegoUIKitPrebuilt.Host
      : role_str === 'Cohost'
        ? ZegoUIKitPrebuilt.Cohost
        : ZegoUIKitPrebuilt.Audience;

  let sharedLinks = [];
  if (role === ZegoUIKitPrebuilt.Host || role === ZegoUIKitPrebuilt.Cohost) {
    sharedLinks.push({
      name: 'Join as co-host',
      url:
        window.location.protocol + '//' +
        window.location.host + window.location.pathname +
        '?roomID=' +
        roomID +
        '&role=Cohost',
    });
  }
  sharedLinks.push({
    name: 'Join as audience',
    url:
      window.location.protocol + '//' +
      window.location.host + window.location.pathname +
      '?roomID=' +
      roomID +
      '&role=Audience',
  });
  // generate Kit Token
  const appID = 1675581432;
  const serverSecret = "32e74cbc519b2da1e7a2fa4624540586";
  const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID, randomID(5), randomID(5));

  // start the call
  let myMeeting = async (element) => {
    // Create instance object from Kit Token.
    const zp = ZegoUIKitPrebuilt.create(kitToken);
    // start the call
    zp.joinRoom({
      container: element,
      scenario: {
        mode: ZegoUIKitPrebuilt.LiveStreaming,
        config: {
          role,
        },
      },
      sharedLinks,
    });
  };

  return (
    <Stack >

      <img style={{position:"absolute", top:5,left:"50%",zIndex:1000}} width={50} height={50} src={Logo} />

      <div
        className="myCallContainer"
        ref={myMeeting}
        
        style={{ width: '100vw', height: '100vh', color: 'black' }}
      ></div>
    </Stack>

  );
}

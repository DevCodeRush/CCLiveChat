import React, { useState } from 'react'
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
  Modal,
} from 'react-native'

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import { WebView } from 'react-native-webview'
import { Dirs, FileSystem } from 'react-native-file-access'
import { Button } from '@src/core/components/Form'
import { LoginScreen } from '@src/screens/LoginScreen/LoginScreen.tsx'

// iAcademy
// const html = `!DOCTYPE html>
// <!DOCTYPE html>
// <html lang="en">
//     <head>
//         <title>iAcademy</title>
//     </head>
//     <body">
//     <form id="form" action="https://imo-uat.aia.co.th/imo-alm-portal-backend/AppGW/switchiAcademy" method="POST">
//             <input type="hidden" name="username" value="0000567744" >
//             <input type="hidden" name="access_token" value="eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3NDkyNjI3NzIsImF1dGhvcml0aWVzIjpbInJvbGVfYWdlbnQiLCJuYW1lX1lBTklTQSBSVUFOR1JJVCIsImFneV8wMDAwMDA5MjcyIl0sImp0aSI6Imw1cm9IdC1aalJqOHRBd1VpRXhackpINVRGcyIsImNsaWVudF9pZCI6ImFnZW50cyIsInVzZXJuYW1lIjoiMDAwMDU2Nzc0NCIsInNjb3BlIjpbImFnZW50Il19.CdVzGkUpm28yd2QYWYjnnBNK8kyZtPlFzQJvSDoTSY4zSgAU3ycbMMKCrdE-XTgeCRY1qy5x8Gay-iXu6BXzVD7mOvkY76Xo04w6yu1J4486zKTbx5jVbVzV0da56U3XyzaRBx2bzKxydnfL1wx2_NIJqT0yD_PW2hNZxMDTC02f3KnjCCtirypIBNgctRkvcxP5Yh_5GmzliHQjLl_yhkYVufbSpkgPtvEEo5yv1iCAyWjaFdRsTVA-62WHz2FKOqsm4xZJh20fcDbJjkDlHqqIIbxaq4Lb4uIuffGC4IzY-BRyjHSCxCd8CXwB8Tl7EWMxi7viTMqE3S0z8pLGfg" >
//             <input type="hidden" name="refresh_token" value="eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzY29wZSI6WyJhZ2VudCJdLCJhdGkiOiJsNXJvSHQtWmpSajh0QXdVaUV4WnJKSDVURnMiLCJleHAiOjE3NDkzNDkxNzIsImF1dGhvcml0aWVzIjpbInJvbGVfYWdlbnQiLCJuYW1lX1lBTklTQSBSVUFOR1JJVCIsImFneV8wMDAwMDA5MjcyIl0sImp0aSI6Ik5EcG5rRmlhYVpqSzczZ3d2Z3JqLWw4cU54byIsImNsaWVudF9pZCI6ImFnZW50cyIsInVzZXJuYW1lIjoiMDAwMDU2Nzc0NCJ9.si1GxVDAM7kMZzYlVL48Ude7nt5kb0B7DgOfiQKxa_RocKs_GsTygSamRMDDwMY3WSjpvBk64EPfrwapcbYGTfthsMyWlVUXDwPa5xR87bviBc7B8qfDjnJHI4TotoyWOtsvn05Vzg1GM3WYRz4U0BxYQIER1Rgc8o84KDHW6WtvpMptOE0Um4W4XaNhyIbV6wk2vjiOnN59314clFcUYhbpFP0hdO8Z0ozjwNhFJQW1H1LsVAL8Jk6AOxJuuAO42svGEDBUmwqtBHLSu--Z7d6WIq72XDbCeogVmm0toibZLDPX7b78CX1GpBERNgGPh5HBFjscadZ2h4igcPSE7w" >
//         </form>
//     </body>
//     <script>
//         window.onload = function () {
//             setTimeout(() => {
//                 document.getElementById('form').submit();
//             }, 300);
//         };
//     </script>
// </html>`;

// Agent Web
const html = `<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Agent Website</title>
    </head>
    <body>
        <div style="display: flex; justify-content: center; padding: 1rem">
            <p>Redirecting, please wait...</p>
        </div>
        <form id="form" method="POST" action="https://agent.uat.aia.co.th/login/public/login/sso">
            <input type="hidden" name="token" value="eyJraWQiOiJZb3NCSW9TX29KMHpLWGVkZXRHdUFCSEhvNEhFVk1jYXEzemFSYVJaekJJIiwiYWxnIjoiUlMyNTYifQ.eyJ2ZXIiOjEsImp0aSI6IkFULmx1U1M5Mlo4aUFwWHZDaXhiMGhySnVzRVdRNGtlb3B4ekxvVVRtUmlzVDAub2FybHZzYmhpTVpBdTdJTG4zbDYiLCJpc3MiOiJodHRwczovL2FpYS10aC1vaWUtdWF0Lm9rdGEuY29tL29hdXRoMi9hdXMycHdua3ozMFpkZlZxdzNsNyIsImF1ZCI6ImFpYV90aGFpbGFuZF9hZ2VudCIsImlhdCI6MTc0OTM1MjA5MSwiZXhwIjoxNzQ5MzU1NjkxLCJjaWQiOiIwb2EyeDY4Zm5mdTlGM01hSTNsNyIsInVpZCI6IjAwdTJ3Nmh0eDNBUWJoVVhkM2w3Iiwic2NwIjpbIm9mZmxpbmVfYWNjZXNzIiwicHJvZmlsZSIsIm9wZW5pZCIsImVtYWlsIiwiZGV2aWNlX3NzbyJdLCJhdXRoX3RpbWUiOjE3NDkzNTIwODksInN1YiI6IjAwMDA1Njc3NDQiLCJhZ2VudFR5cGUiOiJBZ2VudCJ9.R4zJizoGOMMU6kkn6X6cEDf90PbWhqaR8JooFrdwauyK6qECHPG-vDtbnpQ6kWZVnaTjHG3LOxRzJf4q-X1-vaFfeN-_zN3e2bHO6gBnPei4FeVvlQY0P8talOPT48Yas2qvjhqQHZWyRMo5rTGh_8jBUI9oR5Xx7CZrOt_dn1cUTszfxjpsBFtWUutmgI4loSgunShe7XpZ-ntwHzCZqVB81PJ1OnDfWSjOrlJaoqMDK0c-roua6xcFfNiePveKymXWQyAAOMrwqacxQQ543oaQNOtOr9kmbN1dgjQrt_HmFIWAgJ70wyEqYzbcnFRndG9woIAYEUG7pKgby4aj7A">
            <input type="hidden" name="redirectUrl" value="https://agent.uat.aia.co.th/login/home/agent">
        </form>
    </body>
    <script>
        setTimeout(() => {
            document.getElementById('form').submit();
        }, 1000)
    </script>
</html>`

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const [show, setShow] = useState(false)

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const openWebView = () => {
    setShow(true)
  }

  const closeWebView = () => {
    setShow(false)
  }

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <View style={{ height: '100%' }}>
        <LoginScreen />
        <Button title={'Open'} onPress={openWebView} invalid={false} isTouched={false} isDirty={false}
                isValidating={false} />
      </View>
        <Modal visible={show} onDismiss={() => setShow(false)} style={styles.section}>
          <SafeAreaView style={{ flex: 1 }}>
            <WebView
                style={{ flex: 1 }}
                // <>javaScriptEnabled
                // sharedCookiesEnabled={true}
                // thirdPartyCookiesEnabled={true}
                // cacheEnabled={false}
                // onNavigationStateChange={(event) => console.log(event.url)}
                // onLoad={() => console.log('webview loaded')}
                source={{ uri: 'https://agent.uat.aia.co.th/login/home/agent' }}
                // useWebView2={true}
                // useWebKit={true}
                // onFileDownload={async ({ nativeEvent, ...other }) => {
                //   if (nativeEvent && nativeEvent.downloadUrl) {
                //     // Extract filename from the URL
                //     const url = new URL(nativeEvent.downloadUrl);
                //     const filename = url.pathname.split('/').pop() || 'downloaded_file';
                //
                //     // Create the full path for saving the file
                //     const path = `${Dirs.DocumentDir}/${filename}`;
                //
                //     try {
                //       // Download the file
                //       const result = await FileSystem.fetch(nativeEvent.downloadUrl, {
                //         method: 'GET',
                //         path
                //       });
                //       console.log({ result, savedAt: path });
                //     } catch (error) {
                //       console.error('Error downloading file:', error);
                //     }
                //   }
                // }}</>
            />
            <Button title={'Close'} onPress={closeWebView} invalid={false} isTouched={false} isDirty={false}
                    isValidating={false} />
          </SafeAreaView>
        </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },

    section: {
     flex: 1,
      height: '100%',
        width: '100%',
      backgroundColor: 'green',
    },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;

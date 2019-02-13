// import * as React from 'react';
// // import { FileUpload } from "../FileUploader/index";
//
// const servicesUrl = "test";
//
// export class ImageUploadInput extends React.Component {
//   onUploadComplete = serverRes => {
//     const imageUrl = serverRes.imageUrl;
//     console.log(imageUrl)
//   };
//   render() {
//     return (
//       <div>
//         <FileUpload
//           url={servicesUrl + '/upload-image'}
//           method={'POST'}
//           onUploadComplete={this.onUploadComplete}
//           maxFilesize={2}
//         />
//       </div>
//     )
//   }
// }
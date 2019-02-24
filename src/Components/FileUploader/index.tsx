// import * as React from "react";
// import * as Dropzone from "dropzone";
//
// // import * as styles from "./index.css";
//
// export interface IFileUploadProps {
//   uploadUrl: string;
//   method: "POST" | "PUT";
//   acceptedFiles: string;
//   onUploadComplete?: (serverRes: any) => void;
//   maxFiles?: number;
// }
//
// export class FileUpload extends React.Component<IFileUploadProps> {
//   private dz: null | Dropzone = null;
//   private dzContainer: null | HTMLDivElement = null;
//
//   private dzOptions: Dropzone.DropzoneOptions = {
//     url: (() => this.props.uploadUrl) as any, // typedefinitions dont support functions
//     acceptedFiles: this.props.acceptedFiles,
//     method: this.props.method,
//     maxFiles: this.props.maxFiles ? this.props.maxFiles : null
//   };
//
//   public componentDidMount() {
//     if (this.dzContainer === null) {
//       throw new Error("dzContainer not initialised");
//     }
//
//     this.dz = new Dropzone(this.dzContainer, this.dzOptions);
//
//     this.dz.on("success", (e: any, serverRes: any) => {
//       if (this.props.onUploadComplete) {
//         this.props.onUploadComplete(serverRes);
//       }
//     });
//   }
//
//   public render() {
//     // TODO: style
//     return <div ref={x => (this.dzContainer = x)} className="dropzone" />;
//   }
// }
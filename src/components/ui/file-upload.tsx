"use client";
import React, { useCallback, useEffect, useState } from 'react';
import { useDropzone, FileRejection, DropEvent } from 'react-dropzone';
import { Button } from './button';
import { CheckCircledIcon, FileTextIcon, Cross2Icon } from '@radix-ui/react-icons';
import { toast } from './use-toast';
import Image from 'next/image';

const MAX_SIZE = 25 * 1024 * 1024; // 25MB

interface props {
  setIsFileUploaded: (value: boolean) => void
}

const FileUpload = ({ setIsFileUploaded }: props) => {
  const [acceptedFile, setAcceptedFile] = useState<File | null>(null);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0]; // Assuming only one file will be dropped
    setAcceptedFile(file);
    setIsFileUploaded(true);

    // Save file information to localStorage
    const reader = new FileReader();
    reader.onload = () => {
      localStorage.setItem('uploadedFile', JSON.stringify({
        name: file.name,
        size: file.size,
        type: file.type,
        data: reader.result,
      }));
    };
    reader.readAsDataURL(file);

    toast({
      title: 'File uploaded',
      description: `${file.name} has been uploaded successfully.`,
    });
  }, []);

  const onDropRejected = useCallback((fileRejections: FileRejection[], event: DropEvent) => {
    console.log('Rejected files:', fileRejections);
    setAcceptedFile(null); // Clear the accepted file if any file is rejected
    fileRejections.forEach(({ file, errors }) => {
      errors.forEach(({ code }) => {
        switch (code) {
          case 'file-invalid-type':
            toast({
              title: 'Invalid file type',
              description: `${file.name} is not a valid PDF file.`,
              variant: 'destructive',
            });
            break;
          case 'file-too-large':
            toast({
              title: 'File too large',
              description: `${file.name} is too large. Maximum file size is 25MB.`,
              variant: 'destructive',
            });
            break;
          default:
            toast({
              title: 'Unknown error',
              description: `An unknown error occurred while uploading ${file.name}.`,
              variant: 'destructive',
            });
            break;
        }
      });
    });
  }, []);

  const handleClear = () => {
    setAcceptedFile(null);
    localStorage.removeItem('uploadedFile');
    setIsFileUploaded(false);
    toast({
      title: 'File cleared',
      description: 'The uploaded file has been removed.',
    });
  };

  const { getRootProps, getInputProps, isDragActive, isDragReject } = useDropzone({
    onDrop,
    onDropRejected,
    accept: { 'application/pdf': ['.pdf'] },
    maxSize: MAX_SIZE,
  });
  useEffect(() => {
    const storedFile = localStorage.getItem('uploadedFile');
    if (storedFile) {
      const parsedFile = JSON.parse(storedFile);
      const file = new File([parsedFile.data], parsedFile.name, {
        type: parsedFile.type,
      });
      setAcceptedFile(file);
      setIsFileUploaded(true);
    }
  }, []);
  return (
    <div
      {...getRootProps()}
      className={`flex flex-col items-center h-1/2 justify-center w-full p-6 border-2 border-dashed rounded-lg gap-y-4
                  ${isDragActive ? 'border-emerald-500 bg-blue-50' : 'border-gray-300 bg-white'}
                  ${isDragReject ? 'border-rose-500' : ''}`}
    >
      <input {...getInputProps()} />
      {acceptedFile ? (
        <div className='relative border rounded-[9px] h-16 p-[4px] flex shadow gap-x-4 pr-4'>
          <div
            className='border rounded-[9px] p-2 bg-slate-100 flex items-center justify-center h-[54px] w-[54px]'
          >
            <FileTextIcon className="h-4 w-4 text-muted-foreground/50" />
          </div>
          <div className="flex items-center gap-x-1 ">
            <CheckCircledIcon className="h-6 w-6 text-emerald-500" />
            <span className='text-sm text-muted-foreground'>{acceptedFile.name}</span>
          </div>
          <Button
            onClick={handleClear}
            className="absolute top-[-8px] right-[-8px] p-1 rounded-full bg-white h-5 w-5 hover:bg-rose-500 hover:text-white"
            variant={"outline"}
          >
            <Cross2Icon className="h-5 w-5" />
          </Button>
        </div>
      ) : (
        <>
          <Image src={"/upload_file.svg"} alt="Upload File" width={50} height={50} />
          <div>
            <p className={`text-muted-foreground font-medium text-center ${isDragReject ? 'text-rose-500' : ''}`}>
              {isDragActive ? 'Drop the PDF here...' : 'Drag & drop a PDF '}
            </p>
            <p className='text-muted-foreground font-light text-sm text-center'>*Limit 25 MB per file</p>
          </div>
          <Button
            className='text-primary font-bold shadow shadow-violet-300 hover:shadow-lg hover:shadow-violet-300 bg-white hover:bg-slate-50'
          >Upload your file</Button>
        </>
      )}
    </div >
  );
};

export default FileUpload;

// @ts-nocheck
import React, { useState } from 'react';
import {
    TextInput,
    Textarea,
    Button,
    Group,
    FileButton,
    Image,
    Box,
    Notification,
} from '@mantine/core';
import Moon from "../assets/images/Moon.jpg"
import {  IMAGE_MIME_TYPE } from '@mantine/dropzone';
import {DropzoneButton} from "@/components/DropzoneButton/DropzoneButton";
import { useForm } from '@mantine/form';
import { showNotification } from '@mantine/notifications';
import {motion} from "framer-motion";

const ContestantForm = () => {
    const [images, setImages] = useState([]);
    const [previewImages, setPreviewImages] = useState([]);

    const form = useForm({
        initialValues: {
            name: '',
            email: '',
            bio: '',
        },
        validate: {
            name: (value) => (value.length < 3 ? 'Name must be at least 3 characters' : null),
            email: (value) =>
                /^\S+@\S+$/.test(value) ? null : 'Invalid email format',
            bio: (value) =>
                value.length < 10 ? 'Bio must be at least 10 characters' : null,
        },
    });

    const handleImageUpload = (files) => {
        if (images.length + files.length > 4) {
            showNotification({
                title: 'Error',
                message: 'You can upload up to 4 images only',
                color: 'red',
            });
            return;
        }

        const newImages = files.slice(0, 4 - images.length);
        setImages((prev) => [...prev, ...newImages]);
        setPreviewImages((prev) => [
            ...prev,
            ...newImages.map((file) => URL.createObjectURL(file)),
        ]);
    };

    const handleDeleteImage = (index) => {
        const updatedImages = [...images];
        updatedImages.splice(index, 1);
        setImages(updatedImages);

        const updatedPreviews = [...previewImages];
        updatedPreviews.splice(index, 1);
        setPreviewImages(updatedPreviews);
    };

    const handleSubmit = (values) => {
        console.log('Form submitted:', values);
        console.log('Uploaded images:', images);

        showNotification({
            title: 'Success',
            message: 'Form submitted successfully!',
            color: 'green',
        });

        // Clear form and images
        form.reset();
        setImages([]);
        setPreviewImages([]);
    };

    return (
        <button
            className="bg-purple-600 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 ...">
            Sign up
        </button>


        // <div className="min-h-screen flex flex-row bg-black " >
        //
        //     <div className="">
        //         <img src={Moon} alt="Example GIF" className="w-[50vw] h-full mb-1" />
        //     </div>
        // <Box maw={500} mx="auto" p="sm" className="flex items-center">
        //     <form onSubmit={form.onSubmit(handleSubmit)} classname="bg-cover bg-center bg-gradient-to-r from-black to-cyan-500/50 bg-opacity-60 z-10 rounded-2xl">
        //         {/* Name Input */}
        //         <TextInput
        //             label="Name"
        //             placeholder="Enter your name"
        //             withAsterisk
        //             {...form.getInputProps('name')}
        //         />
        //
        //         {/* Email Input */}
        //         <TextInput
        //             label="Email"
        //             placeholder="Enter your email"
        //             withAsterisk
        //             mt="md"
        //             {...form.getInputProps('email')}
        //         />
        //
        //         {/* Bio Textarea */}
        //         <Textarea
        //             label="Bio"
        //             placeholder="Tell us about yourself"
        //             withAsterisk
        //             mt="md"
        //             {...form.getInputProps('bio')}
        //         />
        //
        //         {/* Image Upload Dropzone */}
        //         <DropzoneButton
        //             onDrop={handleImageUpload}
        //             accept={IMAGE_MIME_TYPE}
        //             maxFiles={4}
        //             mt="md"
        //         >
        //             {() => (
        //                 <Group position="center" spacing="xl">
        //                     <span>Drag images here or click to select files</span>
        //                     <span>(Max 4 images)</span>
        //                 </Group>
        //             )}
        //         </DropzoneButton>
        //
        //         {/* Preview Images */}
        //         <Group mt="md" spacing="sm">
        //             {previewImages.map((src, index) => (
        //                 <Box key={index} position="relative">
        //                     <Image src={src} alt={`Preview ${index + 1}`} width={100} height={100} />
        //                     <Button
        //                         mt={5}
        //                         size="xs"
        //                         color="red"
        //                         onClick={() => handleDeleteImage(index)}
        //                     >
        //                         Delete
        //                     </Button>
        //                 </Box>
        //             ))}
        //         </Group>
        //
        //             <div className="flex flex-row mt-5">
        //                 <motion.div
        //                     whileTap={{ scale: 0.9 }}
        //                     whileHover={{ scale: 1.1 }}
        //                     transition={{
        //                         bounceDamping: 10,
        //                         bounceStiffness: 600,
        //                     }}
        //                 >
        //                     <Button
        //                         className="font-orbitron text-white border-2 bg-gradient-to-r from-purple-500 to-indigo-800 hover:bg-indigo-800 hover:text-white rounded-md shadow-lg shadow-indigo-800"
        //                     >
        //                         Submit
        //                     </Button>
        //                 </motion.div>
        //
        //             </div>
        //     </form>
        // </Box>
        // </div>
    );
};

export default ContestantForm;

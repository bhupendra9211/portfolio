"use client";

import { Button, Drawer, Label, Textarea, TextInput } from "flowbite-react";
import { useState } from "react";
import { HiEnvelope } from "react-icons/hi2";
import axios from "axios";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";


interface ContactFormData {
    email: string;
    subject: string;
    message: string;
  }


function Contact() {
    const {
        register,
        handleSubmit,
    
        formState: { errors },
      } = useForm<ContactFormData>();

    const [isOpen, setIsOpen] = useState(false);

    const handleClose = () => setIsOpen(false);

    const onSubmit = async (data:ContactFormData) => {
        handleClose();
        const userInfo = {
          email: data.email,
          subject: data.subject,
          message: data.message,
        };
        try {
          await axios.post("https://getform.io/f/bqooqjzb", userInfo);
          toast.success("Your message has been sent");
        } catch (error) {
          console.log(error);
          toast.error("Something went wrong");
        }
        
      };
    return (
        <div >
            <div className="text-base hover:scale-105 duration-200 cursor-pointer dark:text-white" onClick={() => setIsOpen(true)}>
                Contact 
            </div>
            <Drawer open={isOpen} onClose={handleClose}>
                <Drawer.Header title="CONTACT US" titleIcon={HiEnvelope} />
                <Drawer.Items>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-6 mt-3">
                            <Label htmlFor="email" className="mb-2 block">
                                Your email
                            </Label>
                            <TextInput {...register("email", { required: true })} id="email" name="email" placeholder="name@company.com" type="email" />
                            {errors.email && <span>This field is required</span>}
                        </div>
                        <div className="mb-6">
                            <Label htmlFor="subject" className="mb-2 block">
                                Subject
                            </Label>
                            <TextInput {...register("subject", { required: true })} id="subject" name="subject" placeholder="Let us know how we can help you" />
                            {errors.subject && <span>This field is required</span>}
                        </div>
                        <div className="mb-6">
                            <Label htmlFor="message" className="mb-2 block">
                                Your message
                            </Label>
                            <Textarea {...register("message", { required: true })} id="message" name="message" placeholder="Your message..." rows={4} />
                            {errors.message && <span>This field is required</span>}
                        </div>
                        <div className="mb-6">
                            <Button type="submit" className="w-full">
                                Send message
                            </Button>
                        </div>
                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                            <a href="mailto:info@company.com" className="hover:underline">
                                bhupendrathedeveloper@gmail.com
                            </a>
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            <a href="tel:2124567890" className="hover:underline">
                                9801620807
                            </a>
                        </p>
                    </form>
                </Drawer.Items>
            </Drawer>

        </div>
    )
}

export default Contact

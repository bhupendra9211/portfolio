"use client";

import { useState, useEffect } from "react";
import { Button, Drawer, Label, Textarea, TextInput } from "flowbite-react";
import { HiEnvelope } from "react-icons/hi2";
import { HiMail, HiPhone } from "react-icons/hi";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

interface ContactFormData {
  email: string;
  subject: string;
  message: string;
}

function ContactDrawer() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>();
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
    reset();
  };

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      await axios.post("https://getform.io/f/bqooqjzb", data);
      toast.success("Message sent successfully!");
      reset();
      setTimeout(() => handleClose(), 1500);
    } catch (error) {
      console.log(error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="px-5 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 cursor-pointer font-medium text-sm"
      >
        Hire Me
      </button>
      <Drawer open={isOpen} onClose={handleClose} position="right">
        <Drawer.Header title="Get In Touch" titleIcon={HiEnvelope} />
        <Drawer.Items>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div>
              <Label htmlFor="email" className="mb-2 block font-medium">
                Email Address
              </Label>
              <TextInput
                {...register("email", { required: "Email is required" })}
                id="email"
                placeholder="you@example.com"
                type="email"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
              )}
            </div>
            <div>
              <Label htmlFor="subject" className="mb-2 block font-medium">
                Subject
              </Label>
              <TextInput
                {...register("subject", { required: "Subject is required" })}
                id="subject"
                placeholder="How can I help you?"
              />
              {errors.subject && (
                <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>
              )}
            </div>
            <div>
              <Label htmlFor="message" className="mb-2 block font-medium">
                Message
              </Label>
              <Textarea
                {...register("message", { required: "Message is required" })}
                id="message"
                placeholder="Tell me about your project..."
                rows={5}
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
              )}
            </div>
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
            <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2 flex items-center gap-2">
                <HiMail className="w-4 h-4" />
                <a href="mailto:shahbhupendra9211@gmail.com" className="hover:text-blue-600">
                  shahbhupendra9211@gmail.com
                </a>
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-2">
                <HiPhone className="w-4 h-4" />
                <a href="tel:9801620807" className="hover:text-blue-600">
                  9801620807
                </a>
              </p>
            </div>
          </form>
        </Drawer.Items>
      </Drawer>
    </>
  );
}

export default ContactDrawer;
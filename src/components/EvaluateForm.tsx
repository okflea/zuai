
"use client"
import React, { useState } from 'react'
import FileUpload from './ui/file-upload'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { toast } from "@/components/ui/use-toast"
import { MultiSelect } from './ui/multiselect'
import { Input } from './ui/input'
import Image from 'next/image'


const courseOptions = [
  { value: "B.Tech", label: "B.Tech" },
  { value: "M.Tech", label: "M.Tech" },
  { value: "MCA", label: "MCA" },
  { value: "MBA", label: "MBA" },
  { value: "PhD", label: "PhD" },
]
const subjectOptions = [
  { value: "English", label: "English" },
  { value: "Maths", label: "Maths" },
  { value: "Science", label: "Science" },
  { value: "Social Studies", label: "Social Studies" },
  { value: "Computer Science", label: "Computer Science" },
]
const subjects = [
  "English",
  "Maths",
  "Science",
  "Social Studies",
  "Computer Science",] as const

function EvaluateForm() {
  const [isFileUploaded, setIsFileUploaded] = useState(false)
  const FormSchema = z.object({
    course: z
      .string({
        required_error: "Please select a course .",
      }),
    subject: z.enum(subjects).array().min(1, "Please select at least one subject."),
    essayTitle: z
      .string({
        required_error: "Please give your essay a title.",
      }),

  })
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    mode: "onChange"
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
  }
  return (
    <div className="min-h-[300px] md:min-h-[calc(100%-2rem)] border-2 rounded-lg shadow-sm bg-slate-50 flex flex-col items-center justify-center p-5">
      <FileUpload setIsFileUploaded={setIsFileUploaded} />
      <div
        className=" h-1/2 w-full py-4 "
      >

        <Form {...form}>
          <p className="text-sm text-muted-foreground mb-2">Select your course & subjects*</p>
          <form onSubmit={form.handleSubmit(onSubmit)} className="w-fit space-y-6 ">

            <div className='flex gap-2'>
              <FormField
                control={form.control}
                name="course"
                render={({ field }) => (
                  <FormItem>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Course Type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {courseOptions.map((course) => (
                          <SelectItem key={course.value} value={course.value}>
                            {course.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <MultiSelect
                        title="Select Subjects"
                        options={subjectOptions}
                        selectedValues={new Set(field.value)}
                        onSelectionChange={(selectedValues) => {
                          field.onChange(Array.from(selectedValues));
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="essayTitle"
              render={({ field }) => (
                <FormItem>
                  <p className="text-sm text-muted-foreground ">Enter your essay title*</p>
                  <FormControl>
                    <Input placeholder="how nation works....." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              disabled={!form.formState.isValid || !isFileUploaded}
              className="pl-[9px] gap-2 mt-20 font-semibold"
              type="submit">
              {!form.formState.isValid ?
                (<Image src="/ai-icon-muted.svg" alt="ai-icon-muted" width={22} height={22} />) :
                (<Image src="/ai-icon.svg" alt="ai-icon" width={22} height={22} />)}
              Evaluate your Score
            </Button>
          </form>
        </Form>
        <div>

        </div>
      </div>
    </div>
  )
}

export default EvaluateForm






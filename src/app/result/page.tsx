"use client"
import CircularScore from '@/components/CircularScoreBar'
import PDFViewer from '@/components/PDFViewer'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { FileTextIcon } from '@radix-ui/react-icons'
import Image from 'next/image'
import React, { useEffect } from 'react'

function Page() {
  const [accordianValue, setAccordianValue] = React.useState<string[]>([])
  const [PDFname, setPDFname] = React.useState<string>("")

  useEffect(() => {
    if (localStorage.getItem("uploadedFile")) {
      const { name } = JSON.parse(localStorage.getItem("uploadedFile")!)
      setPDFname(name)
    }
  }, [])
  return (
    <div className="mx-auto max-w-screen-2xl px-4 lg:px-10">
      {/* Container for Sections */}
      <div className={`flex flex-col ${accordianValue.includes("PDF") ? "lg:flex-row" : ""} gap-3 py-4 md:py-10`}>
        {/* Section 1 */}
        <div className="flex-1 bg-white rounded-[30px] border px-4 shadow-sm">
          <Accordion type="multiple" value={accordianValue} onValueChange={setAccordianValue} className="w-full">
            <AccordionItem value="PDF" >
              <AccordionTrigger>

                <div className='flex items-center gap-2 bg-slate-100 rounded-lg p-2'>
                  <FileTextIcon />
                  <p>{PDFname}</p>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <PDFViewer />
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        {/* Section 2 */}
        <div className="flex-1 gap-y-4 flex flex-col">
          <div className='rounded-[30px] border shadow-sm h-30 w-full bg-white py-4 px-8 gap-y-2 flex justify-between items-center'>
            <div className='flex flex-col gap-2'>
              <p>Overall Score</p>
              <p className='font-bold text-3xl'>Remark :
                <span className='text-green-400'> Good</span>
              </p>
              <p className='text-muted-foreground'>Evaluated on : 12 Jul 2024</p>
            </div>
            <div>
              <CircularScore score={15} maxScore={20} />
            </div>
          </div>

          <div className='rounded-[30px] border shadow-sm h-30 w-full bg-white  px-8 gap-y-2 flex justify-between items-center'>
            <Accordion type="multiple" value={accordianValue} onValueChange={setAccordianValue} className="w-full">
              <AccordionItem value="critA">
                <AccordionTrigger>

                  <div className='flex gap-4'>
                    <CircularScore score={8} maxScore={10} size='small' />
                    <div className='flex flex-col justify-center '>
                      <p className='text-muted-foreground text-left'>Criteria A :</p>
                      <p className='font-bold text-2xl'>Understanding Knowledge Questions </p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className='flex flex-col gap-4 pb-4'>
                    <p className='text-muted-foreground'>The essay identifies and focuses on the knowledge question regarding the resolvability of disputes over knowledge claims within disciplines.</p>
                    <p className='text-2xl font-bold'>Strengths</p>
                    <div className='border border-green-400 rounded-[20px] h-30 p-4'>
                      <div className='flex gap-4 px-4 items-center justify-center'>
                        <Image src="/check-circle.png" alt="check-circle" width={20} height={20} />
                        <p>
                          Demonstrates a good understanding of the prescribed title and the associated knowledge questions. </p>
                      </div>

                      <div className='flex gap-4 px-4 items-center justify-center'>
                        <Image src="/check-circle.png" alt="check-circle" width={20} height={20} />
                        <p>
                          Addresses the nature of disputes in both the Natural Sciences and Human Sciences effectively.
                        </p>
                      </div>
                    </div>

                    <p className='text-2xl font-bold'>Scope of Improvement</p>
                    <div className='border border-yellow-400 rounded-[20px] h-30 p-4'>
                      <div className='flex gap-4 px-4 items-center justify-center'>
                        <Image src="/alert-circle.png" alt="check-circle" width={20} height={20} />
                        <p>
                          Demonstrates a good understanding of the prescribed title and the associated knowledge questions. </p>
                      </div>

                      <div className='flex gap-4 px-4 items-center justify-center'>
                        <Image src="/alert-circle.png" alt="check-circle" width={20} height={20} />
                        <p>
                          Addresses the nature of disputes in both the Natural Sciences and Human Sciences effectively.
                        </p>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>


          <div className='rounded-[30px] border shadow-sm h-30 w-full bg-white  px-8 gap-y-2 flex justify-between items-center'>
            <Accordion type="multiple" onValueChange={setAccordianValue} value={accordianValue} className="w-full">
              <AccordionItem value="critB">
                <AccordionTrigger>

                  <div className='flex gap-4'>
                    <CircularScore score={5} maxScore={10} size='small' />
                    <div className='flex flex-col justify-center '>
                      <p className='text-muted-foreground text-left'>Criteria B :</p>
                      <p className='font-bold text-2xl'>Understanding Knowledge Questions </p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className='flex flex-col gap-4 pb-4'>
                    <p className='text-muted-foreground'>The essay identifies and focuses on the knowledge question regarding the resolvability of disputes over knowledge claims within disciplines.</p>
                    <p className='text-2xl font-bold'>Strengths</p>
                    <div className='border border-green-400 rounded-[20px] h-30 p-4'>
                      <div className='flex gap-4 px-4 items-center justify-center'>
                        <Image src="/check-circle.png" alt="check-circle" width={20} height={20} />
                        <p>
                          Demonstrates a good understanding of the prescribed title and the associated knowledge questions. </p>
                      </div>

                      <div className='flex gap-4 px-4 items-center justify-center'>
                        <Image src="/check-circle.png" alt="check-circle" width={20} height={20} />
                        <p>
                          Addresses the nature of disputes in both the Natural Sciences and Human Sciences effectively.
                        </p>
                      </div>
                    </div>

                    <p className='text-2xl font-bold'>Scope of Improvement</p>
                    <div className='border border-yellow-400 rounded-[20px] h-30 p-4'>
                      <div className='flex gap-4 px-4 items-center justify-center'>
                        <Image src="/alert-circle.png" alt="check-circle" width={20} height={20} />
                        <p>
                          Demonstrates a good understanding of the prescribed title and the associated knowledge questions. </p>
                      </div>

                      <div className='flex gap-4 px-4 items-center justify-center'>
                        <Image src="/alert-circle.png" alt="check-circle" width={20} height={20} />
                        <p>
                          Addresses the nature of disputes in both the Natural Sciences and Human Sciences effectively.
                        </p>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>


          <div className='rounded-[30px] border shadow-sm h-30 w-full bg-white  px-8 gap-y-2 flex justify-between items-center'>
            <Accordion type="multiple" value={accordianValue} onValueChange={setAccordianValue} className="w-full">
              <AccordionItem value="critC">
                <AccordionTrigger>

                  <div className='flex gap-4'>
                    <CircularScore score={3} maxScore={10} size='small' />
                    <div className='flex flex-col justify-center '>
                      <p className='text-muted-foreground text-left'>Criteria C :</p>
                      <p className='font-bold text-2xl'>Understanding Knowledge Questions </p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className='flex flex-col gap-4 pb-4'>
                    <p className='text-muted-foreground'>The essay identifies and focuses on the knowledge question regarding the resolvability of disputes over knowledge claims within disciplines.</p>
                    <p className='text-2xl font-bold'>Strengths</p>
                    <div className='border border-green-400 rounded-[20px] h-30 p-4'>
                      <div className='flex gap-4 px-4 items-center justify-center'>
                        <Image src="/check-circle.png" alt="check-circle" width={20} height={20} />
                        <p>
                          Demonstrates a good understanding of the prescribed title and the associated knowledge questions. </p>
                      </div>

                      <div className='flex gap-4 px-4 items-center justify-center'>
                        <Image src="/check-circle.png" alt="check-circle" width={20} height={20} />
                        <p>
                          Addresses the nature of disputes in both the Natural Sciences and Human Sciences effectively.
                        </p>
                      </div>
                    </div>

                    <p className='text-2xl font-bold'>Scope of Improvement</p>
                    <div className='border border-yellow-400 rounded-[20px] h-30 p-4'>
                      <div className='flex gap-4 px-4 items-center justify-center'>
                        <Image src="/alert-circle.png" alt="check-circle" width={20} height={20} />
                        <p>
                          Demonstrates a good understanding of the prescribed title and the associated knowledge questions. </p>
                      </div>

                      <div className='flex gap-4 px-4 items-center justify-center'>
                        <Image src="/alert-circle.png" alt="check-circle" width={20} height={20} />
                        <p>
                          Addresses the nature of disputes in both the Natural Sciences and Human Sciences effectively.
                        </p>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page

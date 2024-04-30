import bg from '../../../src/assets/bg.png'
import { useState } from 'react';
import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
  } from "@material-tailwind/react";
import './Diploma.css'
function Diploma() {
    const [activeTab, setActiveTab] = useState("Scientific Arbitration");
    const data = [
        {
            label: "Scientific Arbitration",
            value: "Scientific Arbitration",
            desc: (
                <div>
                    <div className='mt-10 md:mx-14'>
                        <table border="1" cellPadding="10">
                            <tr>
                                <th colSpan="3" className='font-semibold text-white text-xl'
                                    style={{backgroundColor: '#58AEDD'}}>Chapter one
                                </th>
                            </tr>
                            <tr>
                                <td className='font-semibold text-white text-xl md:w-[200px] w-[136px]  '
                                    style={{backgroundColor: '#58AEDD'}}>Credit hours
                                </td>
                                <td className='font-semibold text-white text-xl'
                                    style={{backgroundColor: '#58AEDD'}}>Subject
                                </td>

                            </tr>
                            <tr>
                                <td className='text-sm text-[#737373] font-normal md:text-left text-center '>3</td>
                                <td className='text-sm text-[#737373] font-normal '>Pedagogy of learning and teaching.
                                </td>

                            </tr>
                            <tr>
                                <td className='text-sm text-[#737373] font-normal md:text-left text-center '>3</td>
                                <td className='text-sm text-[#737373] font-normal '>Teaching methods for subject (1)
                                    (Arabic Language, English Language, Mathematics, Science).
                                </td>

                            </tr>
                            <tr>
                                <td className='text-sm text-[#737373] font-normal md:text-left text-center'>6</td>
                                <td className='text-sm text-[#737373] font-normal '>Teaching Experience (Field Training)
                                    (1)
                                </td>

                            </tr>
                            <tr>
                                <td className='text-sm text-[#737373] font-normal md:text-left text-center '>0</td>
                                <td className='text-sm text-[#737373] font-normal '>JTeacher Standards (1)</td>

                            </tr>
                            <tr>
                                <td className='text-sm text-[#737373] font-normal md:text-left text-center'>12</td>
                                <td className='text-sm text-[#737373] font-normal '>The total approved hours for the
                                    first semester.
                                </td>

                            </tr>

                        </table>
                    </div>


                    <div className='mt-10 mb-16 md:mx-14'>
                        <table border="1" cellPadding="10">
                            <tr>
                                <th colSpan="3" className='font-semibold text-white text-xl'
                                    style={{backgroundColor: '#58AEDD'}}>Chapter two
                                </th>
                            </tr>
                            <tr>
                                <td className='font-semibold text-white text-xl md:w-[200px] w-[136px]  '
                                    style={{backgroundColor: '#58AEDD'}}>Credit hours
                                </td>
                                <td className='font-semibold text-white text-xl'
                                    style={{backgroundColor: '#58AEDD'}}>Subject
                                </td>

                            </tr>
                            <tr>
                                <td className='text-sm text-[#737373] font-normal md:text-left text-center '>3</td>
                                <td className='text-sm text-[#737373] font-normal '>Pedagogy of learning and teaching.
                                </td>

                            </tr>
                            <tr>
                                <td className='text-sm text-[#737373] font-normal md:text-left text-center '>3</td>
                                <td className='text-sm text-[#737373] font-normal '>Teaching methods for subject (2)
                                    (Arabic Language, English Language, Mathematics, Science).
                                </td>

                            </tr>
                            <tr>
                                <td className='text-sm text-[#737373] font-normal md:text-left text-center'>6</td>
                                <td className='text-sm text-[#737373] font-normal '>Teaching Experience (Field Training)
                                    (2)
                                </td>

                            </tr>
                            <tr>
                                <td className='text-sm text-[#737373] font-normal md:text-left text-center '>0</td>
                                <td className='text-sm text-[#737373] font-normal '>JTeacher Standards (2)</td>

                            </tr>
                            <tr>
                                <td className='text-sm text-[#737373] font-normal md:text-left text-center'>12</td>
                                <td className='text-sm text-[#737373] font-normal '>The total approved hours for the
                                    first semester.
                                </td>

                            </tr>
                            <tr>
                                <td className='text-sm text-[#737373] font-normal md:text-left text-center'>3</td>
                                <td className='text-sm text-[#737373] font-normal '>Elective course (taught either in the first semester or in the summer semester
                                </td>

                            </tr>
                            <tr>
                                <td className='text-sm text-[#737373] font-normal md:text-left text-center'>27</td>
                                <td className='text-sm text-[#737373] font-normal '>The total approved credit hours for the diploma.
                                </td>

                            </tr>
                        </table>
                    </div>

                    <div>
                        <div className='flex items-center justify-center pb-[100px]'>
                            <button
                                    className='bg-[#58AEDD] text-white rounded-xl px-[45px] py-[10px]'>Registration
                            </button>
                        </div>
                    </div>

                </div>


            ),
        },
        {
            label: "Elective Courses",
            value: "Elective Courses",
            desc: (
                <div>
                    <div className='mt-10 md:mx-14'>
                        <table border="1" cellPadding="10">
                            <tr>
                                <th colSpan="3" className='font-semibold text-white text-xl'
                                    style={{backgroundColor: '#58AEDD'}}>Chapter three
                                </th>
                            </tr>
                            <tr>
                                <td className='font-semibold text-white text-xl md:w-[200px] w-[136px]  '
                                    style={{backgroundColor: '#58AEDD'}}>Credit hours
                                </td>
                                <td className='font-semibold text-white text-xl'
                                    style={{backgroundColor: '#58AEDD'}}>Subject
                                </td>

                            </tr>
                            <tr>
                                <td className='text-sm text-[#737373] font-normal md:text-left text-center '>3</td>
                                <td className='text-sm text-[#737373] font-normal '>Pedagogy of learning and teaching.
                                </td>

                            </tr>
                            <tr>
                                <td className='text-sm text-[#737373] font-normal md:text-left text-center '>3</td>
                                <td className='text-sm text-[#737373] font-normal '>Teaching methods for subject (3)
                                    (Arabic Language, English Language, Mathematics, Science).
                                </td>

                            </tr>
                            <tr>
                                <td className='text-sm text-[#737373] font-normal md:text-left text-center'>6</td>
                                <td className='text-sm text-[#737373] font-normal '>Teaching Experience (Field Training)
                                    (3)
                                </td>

                            </tr>
                            <tr>
                                <td className='text-sm text-[#737373] font-normal md:text-left text-center '>0</td>
                                <td className='text-sm text-[#737373] font-normal '>JTeacher Standards (3)</td>

                            </tr>
                            <tr>
                                <td className='text-sm text-[#737373] font-normal md:text-left text-center'>12</td>
                                <td className='text-sm text-[#737373] font-normal '>The total approved hours for the
                                    first semester.
                                </td>

                            </tr>

                        </table>
                    </div>


                    <div className='mt-10 mb-16 md:mx-14'>
                        <table border="1" cellPadding="10">
                            <tr>
                                <th colSpan="3" className='font-semibold text-white text-xl'
                                    style={{backgroundColor: '#58AEDD'}}>Chapter four
                                </th>
                            </tr>
                            <tr>
                                <td className='font-semibold text-white text-xl md:w-[200px] w-[136px]  '
                                    style={{backgroundColor: '#58AEDD'}}>Credit hours
                                </td>
                                <td className='font-semibold text-white text-xl'
                                    style={{backgroundColor: '#58AEDD'}}>Subject
                                </td>

                            </tr>
                            <tr>
                                <td className='text-sm text-[#737373] font-normal md:text-left text-center '>3</td>
                                <td className='text-sm text-[#737373] font-normal '>Pedagogy of learning and teaching.
                                </td>

                            </tr>
                            <tr>
                                <td className='text-sm text-[#737373] font-normal md:text-left text-center '>3</td>
                                <td className='text-sm text-[#737373] font-normal '>Teaching methods for subject (4)
                                    (Arabic Language, English Language, Mathematics, Science).
                                </td>

                            </tr>
                            <tr>
                                <td className='text-sm text-[#737373] font-normal md:text-left text-center'>6</td>
                                <td className='text-sm text-[#737373] font-normal '>Teaching Experience (Field Training)
                                    (4)
                                </td>

                            </tr>
                            <tr>
                                <td className='text-sm text-[#737373] font-normal md:text-left text-center '>0</td>
                                <td className='text-sm text-[#737373] font-normal '>JTeacher Standards (4)</td>

                            </tr>
                            <tr>
                                <td className='text-sm text-[#737373] font-normal md:text-left text-center'>12</td>
                                <td className='text-sm text-[#737373] font-normal '>The total approved hours for the
                                    first semester.
                                </td>

                            </tr>
                            <tr>
                                <td className='text-sm text-[#737373] font-normal md:text-left text-center'>3</td>
                                <td className='text-sm text-[#737373] font-normal '>Elective course (taught either in
                                    the first semester or in the summer semester
                                </td>

                            </tr>
                            <tr>
                                <td className='text-sm text-[#737373] font-normal md:text-left text-center'>27</td>
                                <td className='text-sm text-[#737373] font-normal '>The total approved credit hours for
                                    the diploma.
                                </td>

                            </tr>
                        </table>
                    </div>

                    <div>
                        <div className='flex items-center justify-center pb-[100px]'>
                            <button
                                className='bg-[#58AEDD] text-white rounded-xl px-[45px] py-[10px]'>Registration
                            </button>
                        </div>
                    </div>

                </div>
            ),
        },
        {
            label: "Teacher Standards",
            value: "Teacher Standards",
            desc: (
                <div>
                    <div className='mt-10 md:mx-14'>
                        <table border="1" cellPadding="10">
                            <tr>
                                <th colSpan="3" className='font-semibold text-white text-xl'
                                    style={{backgroundColor: '#58AEDD'}}>Chapter five
                                </th>
                            </tr>
                            <tr>
                                <td className='font-semibold text-white text-xl md:w-[200px] w-[136px]  '
                                    style={{backgroundColor: '#58AEDD'}}>Credit hours
                                </td>
                                <td className='font-semibold text-white text-xl'
                                    style={{backgroundColor: '#58AEDD'}}>Subject
                                </td>

                            </tr>
                            <tr>
                                <td className='text-sm text-[#737373] font-normal md:text-left text-center '>3</td>
                                <td className='text-sm text-[#737373] font-normal '>Pedagogy of learning and teaching.
                                </td>

                            </tr>
                            <tr>
                                <td className='text-sm text-[#737373] font-normal md:text-left text-center '>3</td>
                                <td className='text-sm text-[#737373] font-normal '>Teaching methods for subject (5)
                                    (Arabic Language, English Language, Mathematics, Science).
                                </td>

                            </tr>
                            <tr>
                                <td className='text-sm text-[#737373] font-normal md:text-left text-center'>6</td>
                                <td className='text-sm text-[#737373] font-normal '>Teaching Experience (Field Training)
                                    (5)
                                </td>

                            </tr>
                            <tr>
                                <td className='text-sm text-[#737373] font-normal md:text-left text-center '>0</td>
                                <td className='text-sm text-[#737373] font-normal '>JTeacher Standards (5)</td>

                            </tr>
                            <tr>
                                <td className='text-sm text-[#737373] font-normal md:text-left text-center'>12</td>
                                <td className='text-sm text-[#737373] font-normal '>The total approved hours for the
                                    first semester.
                                </td>

                            </tr>

                        </table>
                    </div>


                    <div className='mt-10 mb-16 md:mx-14'>
                        <table border="1" cellPadding="10">
                            <tr>
                                <th colSpan="3" className='font-semibold text-white text-xl'
                                    style={{backgroundColor: '#58AEDD'}}>Chapter six
                                </th>
                            </tr>
                            <tr>
                                <td className='font-semibold text-white text-xl md:w-[200px] w-[136px]  '
                                    style={{backgroundColor: '#58AEDD'}}>Credit hours
                                </td>
                                <td className='font-semibold text-white text-xl'
                                    style={{backgroundColor: '#58AEDD'}}>Subject
                                </td>

                            </tr>
                            <tr>
                                <td className='text-sm text-[#737373] font-normal md:text-left text-center '>3</td>
                                <td className='text-sm text-[#737373] font-normal '>Pedagogy of learning and teaching.
                                </td>

                            </tr>
                            <tr>
                                <td className='text-sm text-[#737373] font-normal md:text-left text-center '>3</td>
                                <td className='text-sm text-[#737373] font-normal '>Teaching methods for subject (6)
                                    (Arabic Language, English Language, Mathematics, Science).
                                </td>

                            </tr>
                            <tr>
                                <td className='text-sm text-[#737373] font-normal md:text-left text-center'>6</td>
                                <td className='text-sm text-[#737373] font-normal '>Teaching Experience (Field Training)
                                    (6)
                                </td>

                            </tr>
                            <tr>
                                <td className='text-sm text-[#737373] font-normal md:text-left text-center '>0</td>
                                <td className='text-sm text-[#737373] font-normal '>JTeacher Standards (6)</td>

                            </tr>
                            <tr>
                                <td className='text-sm text-[#737373] font-normal md:text-left text-center'>12</td>
                                <td className='text-sm text-[#737373] font-normal '>The total approved hours for the
                                    first semester.
                                </td>

                            </tr>
                            <tr>
                                <td className='text-sm text-[#737373] font-normal md:text-left text-center'>3</td>
                                <td className='text-sm text-[#737373] font-normal '>Elective course (taught either in
                                    the first semester or in the summer semester
                                </td>

                            </tr>
                            <tr>
                                <td className='text-sm text-[#737373] font-normal md:text-left text-center'>27</td>
                                <td className='text-sm text-[#737373] font-normal '>The total approved credit hours for
                                    the diploma.
                                </td>

                            </tr>
                        </table>
                    </div>

                    <div>
                        <div className='flex items-center justify-center pb-[100px]'>
                            <button
                                className='bg-[#58AEDD] text-white rounded-xl px-[45px] py-[10px]'>Registration
                            </button>
                        </div>
                    </div>

                </div>
            ),
        },
        {
            label: "Teaching Experience",
            value: "Teaching Experience",
            desc: (
                <div>
                    <div className='mt-10 md:mx-14'>
                        <table border="1" cellPadding="10">
                            <tr>
                                <th colSpan="3" className='font-semibold text-white text-xl'
                                    style={{backgroundColor: '#58AEDD'}}>Chapter Seven
                                </th>
                            </tr>
                            <tr>
                                <td className='font-semibold text-white text-xl md:w-[200px] w-[136px]  '
                                    style={{backgroundColor: '#58AEDD'}}>Credit hours
                                </td>
                                <td className='font-semibold text-white text-xl'
                                    style={{backgroundColor: '#58AEDD'}}>Subject
                                </td>

                            </tr>
                            <tr>
                                <td className='text-sm text-[#737373] font-normal md:text-left text-center '>3</td>
                                <td className='text-sm text-[#737373] font-normal '>Pedagogy of learning and teaching.
                                </td>

                            </tr>
                            <tr>
                                <td className='text-sm text-[#737373] font-normal md:text-left text-center '>3</td>
                                <td className='text-sm text-[#737373] font-normal '>Teaching methods for subject (7)
                                    (Arabic Language, English Language, Mathematics, Science).
                                </td>

                            </tr>
                            <tr>
                                <td className='text-sm text-[#737373] font-normal md:text-left text-center'>6</td>
                                <td className='text-sm text-[#737373] font-normal '>Teaching Experience (Field Training)
                                    (7)
                                </td>

                            </tr>
                            <tr>
                                <td className='text-sm text-[#737373] font-normal md:text-left text-center '>0</td>
                                <td className='text-sm text-[#737373] font-normal '>JTeacher Standards (7)</td>

                            </tr>
                            <tr>
                                <td className='text-sm text-[#737373] font-normal md:text-left text-center'>12</td>
                                <td className='text-sm text-[#737373] font-normal '>The total approved hours for the
                                    first semester.
                                </td>

                            </tr>

                        </table>
                    </div>


                    <div className='mt-10 mb-16 md:mx-14'>
                        <table border="1" cellPadding="10">
                            <tr>
                                <th colSpan="3" className='font-semibold text-white text-xl'
                                    style={{backgroundColor: '#58AEDD'}}>Chapter eight
                                </th>
                            </tr>
                            <tr>
                                <td className='font-semibold text-white text-xl md:w-[200px] w-[136px]  '
                                    style={{backgroundColor: '#58AEDD'}}>Credit hours
                                </td>
                                <td className='font-semibold text-white text-xl'
                                    style={{backgroundColor: '#58AEDD'}}>Subject
                                </td>

                            </tr>
                            <tr>
                                <td className='text-sm text-[#737373] font-normal md:text-left text-center '>3</td>
                                <td className='text-sm text-[#737373] font-normal '>Pedagogy of learning and teaching.
                                </td>

                            </tr>
                            <tr>
                                <td className='text-sm text-[#737373] font-normal md:text-left text-center '>3</td>
                                <td className='text-sm text-[#737373] font-normal '>Teaching methods for subject (8)
                                    (Arabic Language, English Language, Mathematics, Science).
                                </td>

                            </tr>
                            <tr>
                                <td className='text-sm text-[#737373] font-normal md:text-left text-center'>6</td>
                                <td className='text-sm text-[#737373] font-normal '>Teaching Experience (Field Training)
                                    (8)
                                </td>

                            </tr>
                            <tr>
                                <td className='text-sm text-[#737373] font-normal md:text-left text-center '>0</td>
                                <td className='text-sm text-[#737373] font-normal '>JTeacher Standards (8)</td>

                            </tr>
                            <tr>
                                <td className='text-sm text-[#737373] font-normal md:text-left text-center'>12</td>
                                <td className='text-sm text-[#737373] font-normal '>The total approved hours for the
                                    first semester.
                                </td>

                            </tr>
                            <tr>
                                <td className='text-sm text-[#737373] font-normal md:text-left text-center'>3</td>
                                <td className='text-sm text-[#737373] font-normal '>Elective course (taught either in
                                    the first semester or in the summer semester
                                </td>

                            </tr>
                            <tr>
                                <td className='text-sm text-[#737373] font-normal md:text-left text-center'>27</td>
                                <td className='text-sm text-[#737373] font-normal '>The total approved credit hours for
                                    the diploma.
                                </td>

                            </tr>
                        </table>
                    </div>

                    <div>
                        <div className='flex items-center justify-center pb-[100px]'>
                            <button
                                className='bg-[#58AEDD] text-white rounded-xl px-[45px] py-[10px]'>Registration
                            </button>
                        </div>
                    </div>

                </div>


            ),
        },
        {
            label: "Elective courses.",
            value: "Elective courses.",
            desc: (
                <div>
                    <div className='mt-10 md:mx-14'>
                        <table border="1" cellPadding="10">
                            <tr>
                                <th colSpan="3" className='font-semibold text-white text-xl'
                                    style={{backgroundColor: '#58AEDD'}}>Chapter nine
                                </th>
                            </tr>
                            <tr>
                                <td className='font-semibold text-white text-xl md:w-[200px] w-[136px]  '
                                    style={{backgroundColor: '#58AEDD'}}>Credit hours
                                </td>
                                <td className='font-semibold text-white text-xl'
                                    style={{backgroundColor: '#58AEDD'}}>Subject
                                </td>

                            </tr>
                            <tr>
                                <td className='text-sm text-[#737373] font-normal md:text-left text-center '>3</td>
                                <td className='text-sm text-[#737373] font-normal '>Pedagogy of learning and teaching.
                                </td>

                            </tr>
                            <tr>
                                <td className='text-sm text-[#737373] font-normal md:text-left text-center '>3</td>
                                <td className='text-sm text-[#737373] font-normal '>Teaching methods for subject (9)
                                    (Arabic Language, English Language, Mathematics, Science).
                                </td>

                            </tr>
                            <tr>
                                <td className='text-sm text-[#737373] font-normal md:text-left text-center'>6</td>
                                <td className='text-sm text-[#737373] font-normal '>Teaching Experience (Field Training)
                                    (9)
                                </td>

                            </tr>
                            <tr>
                                <td className='text-sm text-[#737373] font-normal md:text-left text-center '>0</td>
                                <td className='text-sm text-[#737373] font-normal '>JTeacher Standards (9)</td>

                            </tr>
                            <tr>
                                <td className='text-sm text-[#737373] font-normal md:text-left text-center'>12</td>
                                <td className='text-sm text-[#737373] font-normal '>The total approved hours for the
                                    first semester.
                                </td>

                            </tr>

                        </table>
                    </div>


                    <div className='mt-10 mb-16 md:mx-14'>
                        <table border="1" cellPadding="10">
                            <tr>
                                <th colSpan="3" className='font-semibold text-white text-xl'
                                    style={{backgroundColor: '#58AEDD'}}>Chapter ten
                                </th>
                            </tr>
                            <tr>
                                <td className='font-semibold text-white text-xl md:w-[200px] w-[136px]  '
                                    style={{backgroundColor: '#58AEDD'}}>Credit hours
                                </td>
                                <td className='font-semibold text-white text-xl'
                                    style={{backgroundColor: '#58AEDD'}}>Subject
                                </td>

                            </tr>
                            <tr>
                                <td className='text-sm text-[#737373] font-normal md:text-left text-center '>3</td>
                                <td className='text-sm text-[#737373] font-normal '>Pedagogy of learning and teaching.
                                </td>

                            </tr>
                            <tr>
                                <td className='text-sm text-[#737373] font-normal md:text-left text-center '>3</td>
                                <td className='text-sm text-[#737373] font-normal '>Teaching methods for subject (10)
                                    (Arabic Language, English Language, Mathematics, Science).
                                </td>

                            </tr>
                            <tr>
                                <td className='text-sm text-[#737373] font-normal md:text-left text-center'>6</td>
                                <td className='text-sm text-[#737373] font-normal '>Teaching Experience (Field Training)
                                    (10)
                                </td>

                            </tr>
                            <tr>
                                <td className='text-sm text-[#737373] font-normal md:text-left text-center '>0</td>
                                <td className='text-sm text-[#737373] font-normal '>JTeacher Standards (10)</td>

                            </tr>
                            <tr>
                                <td className='text-sm text-[#737373] font-normal md:text-left text-center'>12</td>
                                <td className='text-sm text-[#737373] font-normal '>The total approved hours for the
                                    first semester.
                                </td>

                            </tr>
                            <tr>
                                <td className='text-sm text-[#737373] font-normal md:text-left text-center'>3</td>
                                <td className='text-sm text-[#737373] font-normal '>Elective course (taught either in
                                    the first semester or in the summer semester
                                </td>

                            </tr>
                            <tr>
                                <td className='text-sm text-[#737373] font-normal md:text-left text-center'>27</td>
                                <td className='text-sm text-[#737373] font-normal '>The total approved credit hours for
                                    the diploma.
                                </td>

                            </tr>
                        </table>
                    </div>

                    <div>
                        <div className='flex items-center justify-center pb-[100px]'>
                            <button
                                className='bg-[#58AEDD] text-white rounded-xl px-[45px] py-[10px]'>Registration
                            </button>
                        </div>
                    </div>

                </div>


            ),
        },
        {
            label: "Scientific arbitration",
            value: "Scientific arbitration",
            desc: (
                <div>
                    <div className='mt-10 md:mx-14'>
                        <table border="1" cellPadding="10">
                            <tr>
                                <th colSpan="3" className='font-semibold text-white text-xl'
                                    style={{backgroundColor: '#58AEDD'}}>Chapter eleven
                                </th>
                            </tr>
                            <tr>
                                <td className='font-semibold text-white text-xl md:w-[200px] w-[136px]  '
                                    style={{backgroundColor: '#58AEDD'}}>Credit hours
                                </td>
                                <td className='font-semibold text-white text-xl'
                                    style={{backgroundColor: '#58AEDD'}}>Subject
                                </td>

                            </tr>
                            <tr>
                                <td className='text-sm text-[#737373] font-normal md:text-left text-center '>3</td>
                                <td className='text-sm text-[#737373] font-normal '>Pedagogy of learning and teaching.
                                </td>

                            </tr>
                            <tr>
                                <td className='text-sm text-[#737373] font-normal md:text-left text-center '>3</td>
                                <td className='text-sm text-[#737373] font-normal '>Teaching methods for subject (11)
                                    (Arabic Language, English Language, Mathematics, Science).
                                </td>

                            </tr>
                            <tr>
                                <td className='text-sm text-[#737373] font-normal md:text-left text-center'>6</td>
                                <td className='text-sm text-[#737373] font-normal '>Teaching Experience (Field Training)
                                    (11)
                                </td>

                            </tr>
                            <tr>
                                <td className='text-sm text-[#737373] font-normal md:text-left text-center '>0</td>
                                <td className='text-sm text-[#737373] font-normal '>JTeacher Standards (11)</td>

                            </tr>
                            <tr>
                                <td className='text-sm text-[#737373] font-normal md:text-left text-center'>12</td>
                                <td className='text-sm text-[#737373] font-normal '>The total approved hours for the
                                    first semester.
                                </td>

                            </tr>

                        </table>
                    </div>


                    <div className='mt-10 mb-16 md:mx-14'>
                        <table border="1" cellPadding="10">
                            <tr>
                                <th colSpan="3" className='font-semibold text-white text-xl'
                                    style={{backgroundColor: '#58AEDD'}}>Chapter twelve
                                </th>
                            </tr>
                            <tr>
                                <td className='font-semibold text-white text-xl md:w-[200px] w-[136px]  '
                                    style={{backgroundColor: '#58AEDD'}}>Credit hours
                                </td>
                                <td className='font-semibold text-white text-xl'
                                    style={{backgroundColor: '#58AEDD'}}>Subject
                                </td>

                            </tr>
                            <tr>
                                <td className='text-sm text-[#737373] font-normal md:text-left text-center '>3</td>
                                <td className='text-sm text-[#737373] font-normal '>Pedagogy of learning and teaching.
                                </td>

                            </tr>
                            <tr>
                                <td className='text-sm text-[#737373] font-normal md:text-left text-center '>3</td>
                                <td className='text-sm text-[#737373] font-normal '>Teaching methods for subject (12)
                                    (Arabic Language, English Language, Mathematics, Science).
                                </td>

                            </tr>
                            <tr>
                                <td className='text-sm text-[#737373] font-normal md:text-left text-center'>6</td>
                                <td className='text-sm text-[#737373] font-normal '>Teaching Experience (Field Training)
                                    (12)
                                </td>

                            </tr>
                            <tr>
                                <td className='text-sm text-[#737373] font-normal md:text-left text-center '>0</td>
                                <td className='text-sm text-[#737373] font-normal '>JTeacher Standards (12)</td>

                            </tr>
                            <tr>
                                <td className='text-sm text-[#737373] font-normal md:text-left text-center'>12</td>
                                <td className='text-sm text-[#737373] font-normal '>The total approved hours for the
                                    first semester.
                                </td>

                            </tr>
                            <tr>
                                <td className='text-sm text-[#737373] font-normal md:text-left text-center'>3</td>
                                <td className='text-sm text-[#737373] font-normal '>Elective course (taught either in
                                    the first semester or in the summer semester
                                </td>

                            </tr>
                            <tr>
                                <td className='text-sm text-[#737373] font-normal md:text-left text-center'>27</td>
                                <td className='text-sm text-[#737373] font-normal '>The total approved credit hours for
                                    the diploma.
                                </td>

                            </tr>
                        </table>
                    </div>

                    <div>
                        <div className='flex items-center justify-center pb-[100px]'>
                            <button
                                className='bg-[#58AEDD] text-white rounded-xl px-[45px] py-[10px]'>Registration
                            </button>
                        </div>
                    </div>

                </div>


            ),
        },
    ];
    return (
        <>

            <div className=''>
                <img src={bg} className='w-full md:mt-0 mt-14 md:hidden block' alt='image'/>
                <div className='relative md:block hidden'>
                    <img src={bg} className='w-full md:mt-0 mt-14' alt='image'/>
                    <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center'>
                        <div className='w-[70vw] md:h-[10vh] h-[6vh] bg-amber-50 rounded-lg md:mb-0 mb-[6.5rem]'>
                            <div className='text-left p-8 font-semibold lg:text-4xl md:text-2xl '>General Structure of the Diploma</div>
                        </div>
                    </div>
                </div>

                <div className='lg:mt-[-164px] mt-[-114px]'>
                    <Tabs value={activeTab}>
                        <TabsHeader>
                            {data.map(({label, value}) => (
                                <Tab
                                    key={value}
                                    value={value}
                                    onClick={() => setActiveTab(value)}
                                    className={activeTab === value ? 'bg-white ' : 'style'}>
                                    {label}
                                </Tab>
                            ))}
                        </TabsHeader>
                        <TabsBody>
                            {data.map(({value, desc}) => (
                                <TabPanel key={value} value={value}>
                                    {desc}
                                </TabPanel>
                            ))}
                        </TabsBody>
                    </Tabs>
                </div>


            </div>
            <style>
                {`
          ul {
            background-color: #58AEDD;
            
          }
          table {
            font-family: Arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
  border-radius: 5px; 
  overflow: hidden; 
          }
          
          td, th {
            border: 1.3px solid #dddddd;
            // text-align: center;
            padding: 8px;
            
          }
          
          .bg-white {
            background-color: #ffffff;
            border-radius: 10px;
            color:#58AEDD;
           font-size: 18px; 
  font-weight: 800;
          }
          .style{
          
           
            border-radius: 10px;
            color:#ffffff;
           font-size: 18px; 
        font-weight: 800;
         
        `}
            </style>
        </>

    );
}

export default Diploma;

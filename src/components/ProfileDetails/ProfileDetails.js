import React, {Component} from 'react';
import styles from './ProfileDetails.style';
import { withStyles} from '@material-ui/core/styles';


class ProfileDetailsComponent extends Component{
   
    render(){
        const {classes}=this.props
        return(
            <div>
                <h1 style={{display:'flex', justifyContent:'center'}}> Faculty Resume</h1>
                <div>
                <table className={classes.table}>
                    <tr>
                        <th className={classes.th}>Name</th>
                        <th className={classes.th}>Narendra Rawal</th>
                        <td rowspan="7" colspan="2" className={classes.td}>              
                            <img className={classes.img} src='https://user-images.githubusercontent.com/22274195/160230059-825a1040-e684-4145-ac05-5c7d1a0f02c6.PNG' />
                        </td>
                    </tr>

                    <tr>
                        <td  className={classes.td}>Designation</td>
                        <td className={classes.td}>Assistant Professor</td>

                    </tr>
                    <tr>
                        <td className={classes.td}>Department</td>
                        <td className={classes.td}>Computer Science and Engineering</td>

                    </tr>
                    <tr>
                        <td className={classes.td}>Mobile Number</td>
                        <td className={classes.td}>9411775966</td>

                    </tr>
                    <tr>
                        <td className={classes.td}>Email id </td>
                        <td className={classes.td}>narenrawal@gmail.com</td>
                    </tr>
                    <tr>
                        <td className={classes.td}>Teaching Experience</td>
                        <td className={classes.td}>12 years</td>
                    </tr>
                    <tr>
                        <td className={classes.td}>Research Experience</td>
                        <td className={classes.td}>12 years</td>
                    </tr>
                    <tr>
                        <td className={classes.td}>Education Qualification</td>
                        <td colspan="2" className={classes.td}>M.Tech, Ph.D.</td>
                    </tr>
                    <tr>
                        <td className={classes.td}>Area of Interest</td>
                        <td colspan="2" className={classes.td} >
                            1. Digital Image Processing <br/>
                            2. Data Mining<br/>
                            3. Machine learning<br/>
                            4. Blockchain Technology 
                        </td>
                    </tr>
                    <tr>
                        <td className={classes.td}>Achievement</td>
                        <td colspan="2" className={classes.td} >
                            1. MHRD Scholarship during Ph.D. <br/>
                            2. GATE Score 97.11 percentile<br/>
                            3. UGC-NET Qualified
                        </td>
                    </tr>
                    <tr>
                        <td className={classes.td}>Research Supervision (No. of Ph. D. Degree Awarded / Registered)</td>
                        <td colspan="2" className={classes.td} >
                            (i) Ph.D. Degree Awarded: 3 Candidates(co-supervisor)<br/>
                            (ii) Registered for Ph.D. : 1 Candidates (main supervisor)
                        </td>
                    </tr>
                    <tr>
                        <td className={classes.td}>Administrative and Academic Experience</td>
                        <td colspan="2" className={classes.td} >
                            1. Member board of study department of CSE , HNBGU<br/>
                            2. Member of Admission Committee, B.Tech./M.Tech. Programme , HNBGU <br/>
                            3. Program officer,N.S.S. Unit Birla Campus , HNBGU<br/>
                            4. Coordinator E-Governance System, HNBGU. (Developed different projects on open-source platform to provide facilities for Students to online applications for Admission/ Examination system, Online feedback from students, online results processing (tabulation chart, grade sheet , degree, transcripts etc) Staff to provided online pay slip and U.G./P.G./Ph.D /M.Phil Entrance Test Application System)

                        </td>
                    </tr>
                    <tr>
                        <td className={classes.td}>Conference/Symposium/Workshop Attended </td>
                        <td colspan="2" className={classes.td} >
                            1. -“National Seminar on Emerging Dimensions in Information Technology” Organized by Department of Computer Sc. & Engg., GJU Hisar from 10th August – 11th August, 2002.
                            2. “National Seminar on Information Security & Mobile Computing “ Organized by the Department of Computer Sc & Engg, ABES Engg College Ghaziabad from 3rd February – 4th February, 2008.
                            3. “International conference on Advance in Modeling, Optimization and Computing”(AMOC-2011) organized by the Department of Mathemtics, IIT Roorkee from 5 December, 2011.
                            4. “International conference on Soft Computing for Problem Solving” organized by The Institution of Engineers (INDIA),Roorkee Local Center IIT Roorkee from 20th December, 2011.Roorkee.
                            5. Short Term Workshop on Medical Imaging and Image Analysis” Organized by Department of Medical Science & Technology, Indian Institute of Technology Kharagpur from 18th April - 22nd April, 2011.
                            6. “Orientation Programme” organizes by academic staff college H.P. University Shimla, from 2nd June- 28th June, 2014.
                            7. “Refresher Course on "Blockchain Technology" held from 07/12/2020 to 21/12/2020 and successfully completed with A+ Grade” organized by HRDC Jawaharlal Nehru Technological university Hyderabad
                        </td>
                    </tr>
                </table>
                </div>
            </div>
        )
    }
}

export const ProfileDetails= (withStyles(styles)(ProfileDetailsComponent));


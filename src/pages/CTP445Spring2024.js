import SectionContainer from "@/components/section_container";

export default function Home() {
  return (
    <SectionContainer>
        <div class="container-fluid mb-3">
            <div class="row">
                <div class="col-md-12">
                    <div class="card h-100">
                        <div class="card-header bg-secondary text-white">
                            <br /><br /><center><h1 class="card-title">CTP445 Spring 2024<br />Augmented Reality</h1></center><br /><br />
                        </div>
                        <div class="card-body">The interactive experience with digital context has been evolved in the past few decades from desktop/mobile environment to virtual reality (VR). Whereas VR places a user inside a completely computer-generated environment, AR goes beyond this scope by bridging the gap between the virtual and real world seamlessly. This course will introduce theories and applications related to augmented reality technology. Students will also learn basic skills to develop augmented reality applications and content.<br/></div>
                    </div>
                </div>
            </div>
        </div>

        <div class="container-fluid mb-3">
            <div class="row">
                <div class="col-md-6 bg-white">
                    <div class="card h-100">
                        <div class="card-header bg-success text-white">Course Staff</div>
                        <div class="card-body">
                            <b>Instructor: <a href="https://sanghoy.com/" target="_blank">Prof. Sang Ho Yoon</a></b><br />&ensp;&ensp;&ensp;&ensp;&nbsp; <i>Office Hours: By Appointment</i><br /><br />
                            <b>TAs</b>: Youjin Sung <br />&ensp;&ensp;&ensp;&ensp;&nbsp; Hyuckjin Jang<br/>&ensp;&ensp;&ensp;&ensp;&nbsp; Min-yung Kim<br/>&ensp;&ensp;&ensp;&ensp;&nbsp; <i>Office Hours: By Appointment</i>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 bg-white">
                    <div class="card h-100">
                        <div class="card-header bg-success text-white">Course Info</div>
                        <div class="card-body">
                            <b>Time</b>: 1:00-2:30pm Mon/Wed<br />
                            <b>Location</b>: N25 #3229<br />
                            <b>Assignment Submission & Grading</b>: <a href="https://klms.kaist.ac.kr/" target="_blank"><b>KLMS</b></a><br/>
                            <b>Discussion and Q&A</b>: Email to instructors
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="container-fluid mb-3">
            <div className="row">
                <div className="col-md-12 bg-white">
                    <div className="card h-100">
                        <div className="card-header bg-success text-white">Announcement</div>
                        <div className="card-body">
                            &#9642; <b>4/21</b> Submit Progress Presentation Slides to <a href="https://klms.kaist.ac.kr/" target="_blank">KLMS</a> due by 4/28(Sun) 11:59pm<br/>
                            &#9642; <b>4/21</b> <a href="https://docs.google.com/spreadsheets/d/1q0dAEcQSrtzQEZzzvy8lyEf0pzE--zb-vPPN_oQi0Yg/edit#gid=1805183737" target="_blank">Progress Presentation</a> on <b>4/29 & 5/1</b> will be held in N25 #3229.<br />
                            &#9642; <b>2/26</b> Class Starts!<br />
                            &#9642; <b>3/25</b> Proposal Presentation Slides due 3/26 11:59pm (All Teams)
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="container-fluid mb-3">
            <div className="row">
                <div className="col-md-12">
                    <div className="card h-100">
                        <div className="card-header bg-success text-white">Schedule</div><br/>
                        <span style={{color:"blue"}}>&nbsp; &nbsp; &nbsp; * Blue box indicates activity related lectures (project presentation, toolkit lectures)</span>
                    </div>
                </div>
                <div className = "card-body ta">
                    <table class="table table-bordered text-center text-responsive">
                        <thead>
                            <tr>
                            <th scope="col" class="col-md-1">Week</th>
                            <th scope="col" class="col-md-1">Date</th>
                            <th scope="col" class="col-md-4">Topic</th>
                            <th scope="col" class="col-md-4">Material</th>
                            <th scope="col" class="col-md-2">Note</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row" rowspan="2" class = "align-middle">1</th>
                                <td class = "align-middle">2/26</td>
                                <td class = "align-middle">Course overview</td>
                                <td></td>
                                <td class = "align-middle"><a href = "https://forms.gle/vDR7HHYKfBtYUsTH9" target="_blank">Sign up Form</a> due by 2/29(Thu) 11:59pm</td>
                            </tr>
                            <tr>
                                <td class = "align-middle">2/28</td>
                                <td class = "align-middle">Introduction to Augmented Reality </td>
                                <td><img src="../img/bookmark.svg" /> Ronald T. Azuma, <a href = "http://cierto.org/pdf/ARpresence.pdf" target="_blank">A Survey of Augmented RealityPresence: Teleoperators and Virtual Environments</a> (1997) 6 (4): 355–385.<br />
                                <img src="../img/bookmark.svg" /> Paul Milgram et al., <a href = "https://www.spiedigitallibrary.org/conference-proceedings-of-spie/2351/1/Augmented-reality--a-class-of-displays-on-the-reality/10.1117/12.197321.full?SSO=1" target="_blank">Augmented reality: a class of displays on the reality-virtuality continuum</a> Vol. 2351. International Society for Optics and Photonics, 1995.</td>
                                <td></td>
                            </tr>
                            <tr>
                                <th scope="row" rowspan="2" class = "align-middle">2</th>
                                <td class = "align-middle">3/4</td>
                                <td class="table-info align-middle">Team Formation Activity</td>
                                <td class="align-middle"><a href ="https://docs.google.com/presentation/d/1CcayTyM_HsN1wYlhdG-WqGnjXDXUFDPQMsrDezj35sM/edit?usp=sharing" target="_blank">Team Formation Activity</a></td>
                                <td class = "align-middle">
                                    &#9642; <a href="https://docs.google.com/spreadsheets/d/19RklFtOvIpy6RwKsXWMVE-Z-LgvtZuzJdsvyW951ssI/edit?usp=sharing" target="_blank">Reading Group</a> Announcement<br/>
                                    &#9642; <a href="https://docs.google.com/spreadsheets/d/11EqvFcPR8pH-4SRbAvcOe7nH_TiHG2RauyWxh_I4GXY/edit?usp=sharing" target="_blank">Topic Presentation Team</a> Announcement<br/>
                                    &#9642; <a href="https://klms.kaist.ac.kr/" target="_blank">Reading Response (RR)</a> due by 3/7(Thu) 11:59pm<br/>
                                </td>
                            </tr>
                            <tr>
                                <td class = "align-middle">3/6</td>
                                <td class="table-info align-middle">AR Toolkit Introduction</td>
                                <td class = "align-middle">&#9642; AR Toolkit Introduction (<a href="https://klms.kaist.ac.kr/" target="_blank"><b>KLMS</b></a>)<br />
                                    &#9642; HW#1 & Extra Credit Task Handout (<a href="https://klms.kaist.ac.kr/" target="_blank"><b>KLMS</b></a>)<br />
                                &#9642;<a href="https://learn.unity.com/mission/real-time-creation-essentials" target="_blank"> Get started with Unity</a> Tutorial</td>
                                <td class = "align-middle">&#9642; <a href="https://klms.kaist.ac.kr/" target="_blank">Extra Credit Task</a> due by 3/11(Mon) 11:59pm</td>
                            </tr>
                            <tr>
                                <th scope="row" rowspan="2" class = "align-middle">3</th>
                                <td class = "align-middle">3/11</td>
                                <td class = "align-middle">Visual System and Display</td>
                                <td class = "align-middle"><img src="../img/book-half.svg" /> Pausch et al. <a href="https://dl.acm.org/doi/10.1145/258734.258744" target="_blank">"Quantifying immersion in virtual reality."</a> SIGGRAPH, 1997<br />
                                <img src="../img/bookmark.svg" /> Chang et al. <a href="https://www.osapublishing.org/abstract.cfm?uri=optica-7-11-1563" target="_blank">"Toward the next-generation VR/AR optics: a review of holographic near-eye displays from a human-centric perspective."</a> Optica, 2020
                                </td>
                                <td class = "align-middle">&#9642; <a href="https://forms.gle/MKMqzRdj8di1v2UPA" target="_blank">Group AR Project</a> Sign Up due 3/11 11:59pm<br />
                                &#9642; <a href="https://klms.kaist.ac.kr/" target="_blank">RR Group A</a> due by 3/11(Mon) 11:59pm</td>
                            </tr>
                            <tr>
                                <td class = "align-middle">3/13</td>
                                <td class = "align-middle">Tracking</td>
                                <td class = "align-middle">
                                    <img src="../img/book-half.svg" /> Newman et al. <a href="https://doi.org/10.1109/ISMAR.2004.62" target="_blank">"Ubiquitous tracking for augmented reality"</a> ISMAR 2004<br />
                                    <img src="../img/bookmark.svg" /> Feiner et al. <a href="https://dl.acm.org/doi/10.1145/168642.168657" target="_blank">"Windows on the world: 2D windows for 3D augmented reality"</a> UIST 1993<br />
                                    <img src="../img/bookmark.svg" /> Huo et al. <a href="https://dl.acm.org/doi/abs/10.1145/3242587.3242595" target="_blank">"SynchronizAR: Instant Synchronization for Spontaneous and Spatial Collaborations in Augmented Reality"</a> UIST 2018
                                </td>
                                <td class = "align-middle">&#9642; Topic Presentation #1</td>
                            </tr>
                            <tr>
                                <th scope="row" rowspan="2" class = "align-middle">4</th>
                                <td class = "align-middle">3/18</td>
                                <td class="table-info align-middle">AR Toolkit #2</td>
                                <td class = "align-middle">HW#2 Handout (KLMS)</td>
                                <td>&#9642; <a href="https://klms.kaist.ac.kr/" target="_blank">HW #1</a> due by 3/18(Mon) 11:59pm<br />
                                &#9642; <a href="https://klms.kaist.ac.kr/" target="_blank">RR Group B</a> due by 3/18(Mon) 11:59pm</td>
                            </tr>
                            <tr>
                                <td class = "align-middle">3/20</td>
                                <td class = "align-middle">Computer Vision for AR</td>
                                <td class = "align-middle"><img src="../img/book-half.svg" /> Reitmayr et al. <a href="https://ieeexplore.ieee.org/abstract/document/5557942?casa_token=qaN6K0ARGEsAAAAA:RR7HORB1f8MO4p4L8Gw_NidXdfphS5TPhWxO07AP4VmzCZcPm6HZ8FktCYtiOcw_bKZAO1MEjw" target="_blank">"Simultaneous localization and mapping for augmented reality"</a> 2010<br />
                                <img src="../img/bookmark.svg" /> Rublee et al. <a href="https://ieeexplore.ieee.org/abstract/document/7946260?casa_token=-kzAlWuUn78AAAAA:a_o6PVi-tDmCK6iUUzerkL4DHR_ut1ErUhwBe65TXWwUP7yNNFQR9Wlv-AXp-fZl6S9MMmh1Uw" target="_blank">"Orb-slam2: An open-source slam system for monocular, stereo, and rgb-d cameras"</a> IEEE Trans. Robot, 2017<br />
                                <img src="../img/bookmark.svg" /> Ma et al. <a href="https://ieeexplore.ieee.org/abstract/document/8460184" target="_blank">"Sparse-to-Dense: Depth Prediction from Sparse Depth Samples and a Single Image"</a> ICRA, 2018
                                </td>
                                <td class = "align-middle">&#9642; Topic Presentation #2</td>
                            </tr>
                            <tr>
                                <th scope="row" rowspan="2" class = "align-middle">5</th>
                                <td class = "align-middle">3/25</td>
                                <td class = "align-middle">Project Feedback Meetings (Individual Team)</td>
                                <td class = "align-middle"><a href="https://docs.google.com/spreadsheets/d/1q0dAEcQSrtzQEZzzvy8lyEf0pzE--zb-vPPN_oQi0Yg/edit?usp=sharing" target="_blank">Feedback Meeting Schedule</a></td>
                                <td class = "align-middle">&#9642; <a href="https://klms.kaist.ac.kr/" target="_blank">Proposal Presentation Slides</a><br/> due by 3/26(Tue) 11:59pm (All Teams)</td>
                            </tr>
                            <tr>
                                <td class = "align-middle">3/27</td>
                                <td class = "table-info align-middle">Project Proposal Presentation</td>
                                <td class = "align-middle"><a href="https://docs.google.com/spreadsheets/d/1q0dAEcQSrtzQEZzzvy8lyEf0pzE--zb-vPPN_oQi0Yg/edit?usp=sharing" target="_blank">Presentation Schedule</a></td>
                                <td class = "align-middle">&#9642; <a href="https://klms.kaist.ac.kr/" target="_blank">RR Group A</a> due by 3/28(Thu) 11:59pm<br />
                                &#9642; <a href="https://klms.kaist.ac.kr/" target="_blank">HW #2</a> due by 3/31(Sun) 11:59pm</td>
                            </tr>
                            <tr>
                                <th scope="row" rowspan="2" class = "align-middle">6</th>
                                <td class = "align-middle">4/1</td>
                                <td class = "align-middle">Calibration and Registration</td>
                                <td class = "align-middle"><img src="../img/book-half.svg"/> Zhang <a href="https://ieeexplore.ieee.org/abstract/document/888718?casa_token=6ik8Npprs3wAAAAA:z5G3I2AzeslRykA8O1HI_DV9glciPYQc3nzwxngUnPxI25EpjfWjoi3RNUzz37Yi2XEWMPY31Q" target="_blank">"A flexible new technique for camera calibration"</a> TPAMI, 2000<br/>
                                    <img src="../img/bookmark.svg" /> Tuceryan et al. <a href="https://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.412.5855&rep=rep1&type=pdf" target="_blank">"Single-point active alignment method (SPAAM) for optical see-through HMD calibration for augmented reality"</a> Presence: Teleoperators & Virtual Environments, 2002<br/>
                                    <img src="../img/bookmark.svg" /> Plopski et al. <a href="https://ieeexplore.ieee.org/abstract/document/7012105?casa_token=eZQK6T7s7mcAAAAA:EjczFG8owk--xW-Q6kbVfVscc-QDsftuuDi35N-8bvfNp_xBhG4t2CssH-M8rSyx94B04Lzk0g" target="_blank">"Corneal-Imaging Calibration for Optical See-Through Head-Mounted Displays"</a> TVCG, 2015
                                </td>
                                <td class = "align-middle">&#9642; Topic Presentation #3<br />&#9642; <a href="https://klms.kaist.ac.kr/" target="_blank">RR Group B</a> due by 4/1(Mon) 11:59pm</td>
                            </tr>
                            <tr>
                                <td class = "align-middle">4/3</td>
                                <td class = "align-middle">Project Feedback & Discussion<br/> AR Toolkit Q&A</td>
                                <td class = "align-middle"><a href="https://docs.google.com/spreadsheets/d/1q0dAEcQSrtzQEZzzvy8lyEf0pzE--zb-vPPN_oQi0Yg/edit?usp=sharing" target="_blank">Feedback Meeting Schedule</a><br/>&#9642; HW#3 Handout (KLMS)</td>
                                <td class = "align-middle"></td>
                            </tr>
                            <tr>
                                <th scope="row" rowspan="2" class = "align-middle">7</th>
                                <td class = "align-middle">4/8</td>
                                <td class = "align-middle">Visual Coherence</td>
                                <td class = "align-middle">
                                    <img src="../img/book-half.svg"/> Breen et al. <a href="https://www.cs.drexel.edu/~david/Papers/eg96.pdf" target="_blank">"Interactive Occlusion and Automatic Object Placement for Augmented Reality"</a> Computer Graphics Forum, 1996<br/>
                                    <img src="../img/bookmark.svg" /> Kan et al. <a href="https://ieeexplore.ieee.org/abstract/document/6402546?casa_token=xBcorzrNsakAAAAA:RkA-doEO71n7R493RMtl9IklnEUafigHY2YjbhNFF5tKsU55Pml6cA1WQAukhcmGzQpZhOYTwg" target="_blank">"High-quality reflections, refractions, and caustics in augmented reality and their contribution to visual coherence"</a> ISMAR, 2012<br/>
                                    <img src="../img/bookmark.svg"/> Fischer et al. <a href="https://ieeexplore.ieee.org/abstract/document/1492774?casa_token=RpmeI94kueUAAAAA:feXrriyMg08uqNvtsjHXlUHZN07r9cXyC3uFymb5M9w-Q8m4osJPegobCgeO-pGE9AFSjSbhZA" target="_blank">"Stylized augmented reality for improved immersion"</a> IEEE VR, 2005
                                </td>
                                <td class = "align-middle">&#9642; Topic Presentation #4</td>
                            </tr>
                            <tr>
                                <td class = "align-middle">4/10</td>
                                <td class="table-secondary align-middle">No class</td>
                                <td class = "align-middle"></td>
                                <td class = "align-middle">&#9642; HW#3 due by 4/10(Wed) 11:59pm</td>
                            </tr>
                            <tr>
                                <th scope="row" rowspan="2" class = "align-middle">8</th>
                                <td class = "align-middle">4/15</td>
                                <td class="table-secondary align-middle">No class (Midterms Week)</td>
                                <td class = "align-middle"></td>
                            </tr>
                                <tr>
                                <td class = "align-middle">4/17</td>
                                <td class="table-secondary align-middle">No class (Midterms Week)</td>
                                <td></td>
                                <td class = "align-middle">&#9642; <a href="https://klms.kaist.ac.kr/" target="_blank">RR Group A</a> due by 4/18(Thu) 11:59pm</td>
                            </tr>
                            <tr>
                                <th scope="row" rowspan="2" class = "align-middle">9</th>
                                <td class = "align-middle">4/22</td>
                                <td class = "align-middle">Situated Visualization</td>
                                <td class = "align-middle">H
                                W#4 Handout (KLMS)<br />
                                    <img src="../img/book-half.svg" /> White et al. <a href="https://doi.org/10.1145/1518701.1518871" target="_blank">"SiteLens: situated visualization techniques for urban site visits"</a> CHI, 2009<br />
                                    <img src="../img/bookmark.svg" /> Willet et al. <a href="https://doi.org/10.1109/TVCG.2016.2598608" target="_blank">Embedded data representations"</a> TVCG, 2016<br />
                                    <img src="../img/bookmark.svg" /> Lin et al. <a href="https://doi.org/10.1145/3411764.3445649" target="_blank">"Towards an Understanding of Situated AR Visualization for Basketball Free-Throw Training"</a> CHI, 2021
                                </td>
                                <td class = "align-middle">&#9642; Topic Presentation #5<br/>&#9642; <a href="https://klms.kaist.ac.kr/" target="_blank">RR Group B (Interaction)</a> due by 4/22(Mon) 11:59pm</td>
                            </tr>
                            <tr>
                                <td class = "align-middle">4/24</td>
                                <td class = "align-middle">Interaction</td>
                                <td><img src="../img/book-half.svg" /> Ishii et al. <a href="https://dl.acm.org/doi/pdf/10.1145/258549.258715" target="_blank">"Tangible bits: towards seamless interfaces between people, bits and atoms</a> CHI, 1997<br />
                                <img src="../img/bookmark.svg" /> Du et al. <a href="https://dl.acm.org/doi/abs/10.1145/3379337.3415881" target="_blank">"DepthLab: Real-time 3D interaction with depth maps for mobile augmented reality"</a> UIST, 2020<br/>
                                <img src="../img/bookmark.svg" /> Harrison et al. <a href="https://dl.acm.org/doi/abs/10.1145/2047196.2047255" target="_blank">"OmniTouch: wearable multitouch interaction everywhere"</a> UIST, 2011
                                </td>
                                <td class = "align-middle">&#9642; Topic Presentation #6</td>
                            </tr>
                            <tr>
                                <th scope="row" rowspan="2" class = "align-middle">10</th>
                                <td class = "align-middle">4/29</td>
                                <td class = "table-info align-middle">Project Progress Presentation</td>
                                <td class = "align-middle"><a href="https://docs.google.com/spreadsheets/d/1q0dAEcQSrtzQEZzzvy8lyEf0pzE--zb-vPPN_oQi0Yg/edit?usp=sharing" target="_blank">Presentation Schedule</a></td>
                                <td class = "align-middle">&#9642; <a href="https://klms.kaist.ac.kr/" target="_blank">Progress Presentation Slides</a> due by 4/28(Sun) 11:59pm</td>
                            </tr>
                            <tr>
                                <td class = "align-middle">5/1</td>
                                <td class = "table-info align-middle">Project Progress Presentation </td>
                                <td class = "align-middle"><a href="https://docs.google.com/spreadsheets/d/1q0dAEcQSrtzQEZzzvy8lyEf0pzE--zb-vPPN_oQi0Yg/edit?usp=sharing" target="_blank">Presentation Schedule</a></td>
                                <td></td>
                            </tr>
                            <tr>
                                <th scope = "row" rowspan="2" class = "align-middle">11</th>
                                <td class = "align-middle">5/6</td>
                                <td class = "table-secondary align-middle">No class</td>
                                <td class = "align-middle">Project Feedback Meeting</td>
                                <td class = "align-middle">&#9642; HW#4 due by 5/5(Sun) 11:59pm<br/>
                                    &#9642; <a href="https://klms.kaist.ac.kr/" target="_blank">RR Group A (Modeling & Annotation)</a> due by 5/6(Mon) 11:59pm</td>
                            </tr>
                            <tr>
                                <td class = "align-middle">5/8</td>
                                <td class="align-middle">Modeling & Annotation </td>
                                <td class="align-middle"><img src="../img/book-half.svg"/>Newcombe et al. <a href="https://ieeexplore.ieee.org/abstract/document/6162880" target="_blank">"Kinectfusion: Real-time dense surface mapping and tracking"</a> ISMAR, 2011<br/>
                                    <img src="../img/bookmark.svg"/> Nuernberger et al. <a href="https://ieeexplore.ieee.org/abstract/document/7460046" target="_blank">"Interpreting 2d gesture annotations in 3d augmented reality"</a> 3DUI, 2016</td>
                                <td class = "align-middle">&#9642; Topic Presentation #7<br />
                                    &#9642; <a href="https://klms.kaist.ac.kr/" target="_blank">Progress Report</a> due by 5/12(Sun) 11:59pm</td>
                            </tr>
                            <tr>
                                <th scope="row" rowspan="2" class = "align-middle">12</th>
                                <td class = "align-middle">5/13</td>
                                <td class = "align-middle">User Study(Recorded Video)</td>
                                <td></td>
                                <td class = "align-middle">&#9642; <a href="https://klms.kaist.ac.kr/" target="_blank">RR Group B (Authoring)</a> due by 5/16(Thu) 11:59pm</td>
                            </tr>
                                <tr>
                                <td class = "align-middle">5/15</td>
                                <td class="table-secondary align-middle">No Class</td>
                                <td class="align-middle"></td>
                                <td class = "align-middle">&#9642; CTSCAPE (SymCT) Registration
                                </td>
                            </tr>
                            <tr>
                                <th scope="row" rowspan="2" class = "align-middle">13</th>
                                <td class = "align-middle">5/20</td>
                                <td class = "align-middle">Authoring</td>
                                <td class = "align-middle"><img src="../img/book-half.svg"/>Lee et al. <a href="https://dl.acm.org/doi/10.1145/1070838.1070840" target="_blank">"Immersive authoring: What you experience is what you get"</a> Communications of the ACM, 2005<br/>
                                <img src="../img/bookmark.svg"/> Villanueva et al. <a href="https://dl.acm.org/doi/abs/10.1145/3313831.3376146" target="_blank">"Meta-AR-app: an authoring platform for collaborative augmented reality in STEM classrooms"</a> CHI, 2020<br/>
                                <img src="../img/bookmark.svg"/> Wang et al. <a href="https://dl.acm.org/doi/abs/10.1145/3472749.3474769" target="_blank">"GesturAR: An Authoring System for Creating Freehand
                                Interactive Augmented Reality Applications"</a> UIST, 2021
                                </td>
                                <td class = "align-middle">&#9642; Topic Presentation #8<br/>
                                    &#9642; <a href="https://klms.kaist.ac.kr/" target="_blank">RR Group A (Navigation)</a> due by 5/23(Thu) 11:59pm</td>
                            </tr>
                            <tr>
                                <td class = "align-middle">5/22</td>
                                <td class = "align-middle">CTScape Participation on 5/31 (Make-up Class)</td>
                                <td class = "align-middle"><a href="https://docs.google.com/forms/d/e/1FAIpQLSf2fWT_AWZEYC2A4xJvVfmYFifZavBqaFjuTykrl-n67Bmz4Q/viewform" target="_blank">CTScape Registration</a></td>
                            </tr>
                            <tr>
                                <th scope="row" rowspan="2" class = "align-middle">14</th>
                                <td class = "align-middle">5/27</td>
                                <td class = "align-middle">Navigation</td>
                                <td><img src="../img/book-half.svg" />Mulloni et al. <a href="https://doi.org/10.1109/MPRV.2009.30" target="_blank">"Indoor positioning and navigation with camera phones"</a> IEEE Pervasive Computing, 2009<br/>
                                <img src="../img/bookmark.svg" /> Sukan et al. <a href="https://doi.org/10.1145/2642918.2647417" target="_blank">"Parafrustum: Visualization techniques for guiding a user to a constrained set of viewing positions and orientations"</a> UIST, 2014<br/>
                                <img src="../img/bookmark.svg" /> Bae et al. <a href="https://doi.org/10.1145/1805964.1805968" target="_blank">"Computational Rephotography"</a> ACM Transactions on Graphics, 2010</td>
                                <td class = "align-middle">&#9642; Topic Presentation #9<br/>
                                    &#9642; <a href="https://klms.kaist.ac.kr/" target="_blank">RR Group B (Collaboration)</a> due by 5/27(Mon) 11:59pm</td>
                            </tr>
                            <tr>
                                <td class = "align-middle">5/29</td>
                                <td class = "align-middle">Collaboration</td>
                                <td><img src="../img/book-half.svg"/>Lukosch et al. <a href="https://link.springer.com/article/10.1007/s10606-015-9239-0" target="_blank">"Collaboration in Augmented Reality"</a> Computer Supported Cooperative Work (CSCW), 2015<br/>
                                <img src="../img/bookmark.svg"/> Benko et al. <a href="https://doi.org/10.1145/2642918.2647402" target="_blank">"Dyadic Projected Spatial Augmented Reality"</a> UIST, 2014<br/>
                                <img src="../img/bookmark.svg"/> VILLANUEVA et al. <a href="https://dl.acm.org/doi/pdf/10.1145/3512928" target="_blank">"ColabAR: A Toolkit for Remote Collaboration in Tangible Augmented Reality Laboratories"</a> CSCW, 2022</td>
                                <td class = "align-middle">&#9642; Topic Presentation #10</td>
                            </tr>
                            <tr>
                                <th scope="row" rowspan="2" class = "align-middle">15</th>
                                <td class ="align-middle">6/3</td>
                                <td class = "table-info align-middle">Final Presentation</td>
                                <td class = "align-middle"><a href="https://docs.google.com/spreadsheets/d/1q0dAEcQSrtzQEZzzvy8lyEf0pzE--zb-vPPN_oQi0Yg/edit?usp=sharing" target="_blank">Presentation Schedule</a></td>
                                <td class = "align-middle">
                                    &#9642; <a href="https://klms.kaist.ac.kr/" target="_blank">Final Presentation Slides</a> due by 6/2 11:59pm</td>
                            </tr>
                            <tr>
                                <td class = "align-middle">6/5</td>
                                <td class = "table-info align-middle">Final Presentation</td>
                                <td class = "align-middle"><a href="https://docs.google.com/spreadsheets/d/1q0dAEcQSrtzQEZzzvy8lyEf0pzE--zb-vPPN_oQi0Yg/edit?usp=sharing" target="_blank">Presentation Schedule</a></td>
                                <td class = "align-middle">&#9642; <a href="https://klms.kaist.ac.kr/" target="_blank">Final Presentation Audience Evaluation</a> due by 6/5(Wed) 11:59pm</td>
                            </tr>
                            <tr>
                                <th scope="row" rowspan="2" class = "align-middle">16</th>
                                <td class = "align-middle">6/10</td>
                                <td class="table-secondary">No class (Finals Week)</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td class = "align-middle">6/12</td>
                                <td class="table-secondary align-middle">No class (Finals Week)</td>
                                <td class = "align-middle"></td>
                                <td class = "align-middle">
                                    &#9642; <a href="https://klms.kaist.ac.kr/" target="_blank">Final Report & Video</a> due by 6/11(Tue) 11:59pm<br/>
                                    &#9642; <a href="https://klms.kaist.ac.kr/" target="_blank">Audience Evaluation (Final Video)</a> due by 6/13(Thu) 11:59pm</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>


    </SectionContainer>
  );
}
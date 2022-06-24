import React, { forwardRef, useEffect, useRef, useState } from 'react';
import Button from '../component/common/button/button';
import Header from '../component/common/header/header';
import ArrowIcon from '../component/common/svg/arrowIcon';
import SubTitle from '../component/common/texts/subTitle';
import TitleContainer from '../component/common/texts/titleContainer';
import PointContainer from '../component/page/home/aboutMe/pointContainer';
import SkillContainer from '../component/page/home/aboutMe/skillContainer';
import Cloud01 from '../component/page/home/main/cloud01';
import Cloud02 from '../component/page/home/main/cloud02';
import Cloud03 from '../component/page/home/main/cloud03';
import Moon from '../component/page/home/main/moon';
import Project from '../component/page/home/project/project';
import styles from '../css/page/home.module.css';
import { send } from 'emailjs-com';
import Modal from '../component/common/modal/modal';
import CommonBg from '../component/common/commonBg/commonBg';

const Home = (props) => {
    const pointContents = [
        {key: 'item1', text1: '정확한 업무처리', text2: `꼼꼼하고 책임감 있는 성격으로\n내 일은 끝까지 마무리 짓는 태도`},
        {key: 'item2', text1: '예리한 안목', text2: `디자이너로 다져진 안목으로\n웹 개발시 사소한 부분도 캐치`},
        {key: 'item3', text1: '꾸준한 노력', text2: `역량 향상을 위해 꾸준히 노력하고\n끊임없이 배우는 태도`},
        {key: 'item4', text1: '직관적 UXUI', text2: `명확한 정보 전달을 위해\n사용자를 고려한 UXUI`},
    ];

    const skills = ['Photoshop','illustrator', 'XD', 'HTML', 'CSS', 'Javascript', 'Jquery', 'React', 'Git'];

    const projects = [
        // {key: 'project01',
        // title: '💻 Computer Based Test',
        // subTitle: `의과대 학생들이 컴퓨터를 이용해 시험에 응시하는 프로그램입니다. `,
        // feature: `시험 생성, 문제 출제, 문제 즐겨찾기, 시험 운영 및 모니터링, 성적 산출, 시험 응시`,
        // part: 'UXUI 기획 및 디자인, 퍼블리싱',
        // skill: 'Adobe XD, Adobe Illustrator, HTML, CSS, Javascript, React, Git'},

        {key: 'project02',
        title: '📷 FOCUS8',
        subTitle: `클라이언트의 홈페이지 리뉴얼 프로젝트에 참여했습니다. 해당업체의 디자이너가 작업한 디자인 파일을 받아 퍼블리싱 작업을 맡았습니다.`,
        part: '퍼블리싱',
        skill: 'HTML, CSS, jquery',
        url: `https://www.focus8.co.kr/home/index.php`},
        
        // {key: 'project02',
        // title: '📝 문제관리 은행',
        // subTitle: '시험문제를 출제하는 프로그램으로 React를 사용해 구축했습니다. 이 프로그램에서 등록한 시험문제가 \'Computer Based Test\' 프로젝트와 연동되어 문제가 출제 됩니다. 이전 \'Computer Based Test\' 프로젝트의 경험을 바탕으로 이 프로젝트는 처음부터 끝까지 혼자서 프론트엔드 개발을 했습니다.',
        // feature: '로그인, 생성된 시험 리스트, 문제 등록 (문제 유형 - 일반 문제, R타입 문제, 배점 입력, 문제 내용, 부가설명, 문항, 정답, 이미지 첨부파일), 문제 수정 및 삭제, 문제 미리보기, 전체 문제 한번에 보기',
        // part: 'UI/UX 작업, 퍼블리싱, 프론트엔드 개발',
        // skill: 'Adobe XD, Adobe Illustrator, HTML, CSS, Javascript, React, Git'},

        // {key: 'project02',
        // title: `💓 CPR 교육용 어플`,
        // subTitle: '심폐소생술 교육용 어플로 디자인 작업에 참여했습니다. 이 어플은 심폐소생술 교육용 마네킹에 VR(가상현실)을 접목해 실시간으로 실습 현황을 어플로 확인할 수 있습니다. 그동안 웹 작업만 하다 처음으로 안드로이드 어플 디자인을 해본 프로젝트입니다.',
        // feature: '시나리오 리스트, 시나리오 설명, 실습 시작, 실시간 실습 현황 (압박 깊이, 압박 위치 등), 실습 결과',
        // part: 'UI/UX 작업',
        // skill: 'Adobe XD, Adobe Illustrator'},

        // {key: 'project03',
        // title: '🏣 세흥병원',
        // subTitle: '진료시간표 및 의료진 페이지, 뇌신경센터 페이지 등 페이지 추가 요청이 들어오면 클라이언트가 요청하는 컨셉에 맞게 디자인하고 퍼블리싱 했으며, 페이지 수정 및 팝업에 대한 요청이 들어오면 요청 내용에 알맞게 유지보수 작업을 했습니다.',
        // feature: '이메일 템플릿',
        // part: '웹디자인, 퍼블리싱',
        // skill: 'Adobe Photoshop, HTML, CSS, jquery',
        // url: ''},

        {key: 'project03',
        title: '🏃‍♂️ 다이어트 캘린더',
        subTitle: '클라이언트의 홈페이지 리뉴얼 프로젝트에 참여했습니다. 해당업체의 디자이너가 작업한 디자인 파일을 받아 퍼블리싱 작업을 맡았습니다. 처음으로 php를 아용해 작업한 프로젝트입니다.',
        part: '웹디자인, 퍼블리싱',
        skill: 'Adobe XD, HTML, CSS, React',
        url: ``},

        {key: 'project04',
        title: '⏱ 이전 버전의 포트폴리오',
        subTitle: '이전 버전의 포트폴리오로 퍼블리싱 작업에 대해 더 많이 확인할 수 있습니다.',
        part: '퍼블리싱',
        skill: 'Adobe Photoshop, Adobe Illustrator, HTML, CSS, jquery',
        url: ``},

        // {key: 'project06',
        // title: `🖼 비드갤러리`,
        // subTitle: '인테리어 액자를 판매하는 쇼핑몰 사이트로 신입 디자이너 당시 메인 페이지 디자인 보조작업을 했습니다. 상품구매를 유도하기 위해 한편의 갤러리를 보는듯한 레이아웃으로 구성했으며, 상품판매 사이트라는 점을 고려해 상품이 돋보이도록 무채색 위주로 사용했습니다.',
        // feature: '메인 페이지',
        // part: 'UI/UX 작업',
        // skill: 'Adobe Photoshop',
        // url: `http://www.videgallery.com/shop/`},
    ];

    // 현재 슬라이드 index
    const [currentIndex, setCurrentIndex] = useState(0);
    const sliderPoject = (event) => {
        const target = event.currentTarget;
        
        if(target.dataset.name === 'next') {
            if(currentIndex < projects.length - 1) {
                return setCurrentIndex(prevState => prevState + 1);
            }else {
                setCurrentIndex(0);
            }
        }else {
            // 0초과 미만 => 감소
            if(currentIndex > 0 && currentIndex < projects.length) {
                return setCurrentIndex(prevState => prevState - 1);
            }else if(currentIndex === 0) {
                return setCurrentIndex(projects.length - 1);
            }
        }
    };

    const [pageHeight, setPageHeight] = useState(undefined);
    const [currentcPage, setCurrentPage] = useState(0); 

    const mainRef = useRef();
    const mainTextRef = useRef();

    const [moonOpacity, setMoonOpacity] = useState(1);
    const [moonTransform, setMoonTransform] = useState(1);

    const mindRef = useRef();

    const initialSendEmailValue = {
        from_name: '',
        email: '',
        phone: '',
        message: ''
    };

    const [sendEmailValue, setSendEmailValue] = useState(initialSendEmailValue);

    const handleChage = (event) => {
        setSendEmailValue(prevState => ({...prevState, [event.target.name]: event.target.value}));
    };

    const [modal, setModal] = useState({active: false, text: ''});

    const handleSubmit = (event) => {
        event.preventDefault();
        
        send('service_kau7c0p', 'template_dra0e6k', sendEmailValue, 'user_7DsYEvcsLIHSAu1AWnfn8')
        .then((result) => {
            console.log(result.status, result.text);
            setSendEmailValue(initialSendEmailValue);
            setModal({active: true, text: '이메일이 전송되었습니다. 감사합니다.'});
        }, (error) => {
            console.log(error.text);
            setModal({active: false, text: '이메일이 전송이 실패되었습니다. 다시 시도해주세요.'});
        });
    };

    const closeModal = () => {
        setModal(false);
    };
    return (
        <>
            <Header />
            <div className="container">
                <section ref={mainRef} className={`${styles.main} section`}>
                    <div ref={mainTextRef} className="inner">
                        <div className={styles.mainText}>
                            {/* <TitleContainer title={`사용자 경험 설계하는`} fontSize='9rem' /> */}
                            <TitleContainer title={`UXUI 디자이너`} fontSize='9rem' />
                            <TitleContainer title={`서리라`} fontSize='12.4rem' />
                        </div>
                    </div>
                    <Moon opacity={moonOpacity} transform={moonTransform} />
                    <Cloud01 />
                    <Cloud02 />
                    <Cloud03 />
                </section>

                <div className={styles.subPageContainer}>
                    {/* mind */}
                    <section ref={mindRef} className={`${styles.mind} section`}>
                        <div className="inner">
                            <TitleContainer title={`사용자 경험을 고려한\n직관적인 UXUI`} fontSize='6.4rem' />
                            <div className={`${styles.textContainer} contents-bg`}>
                                <p className={`${styles.text} text`}>
                                    사용자가 서비스를 이용할 때, 쉽고 편하게 사용할 수 있도록 직관적으로 제공하기 위해 노력합니다.
                                    사용자가 다양한 서비스를 이용하면서 습득한 경험을 바탕으로 서비스를 제공하는게 중요하다고 생각하기 때문에 평소 서비스를 이용할 때 분석하려고 노력하며 다양한 기기에 최적화된 UX를 설계하기 위해 꾸준히 공부하고 적용하려고 합니다.
                                    또한, 사용자가 겪는 문제를 찾아 UX로 풀어냄으로써 사용자 경험을 개선하고 싶습니다.
                                    <br/><br/>
                                    UXUI를 웹으로 구현할 때, 최대한 오차없이 구현하기 위해 꼼꼼하게 확인하고, 반복되는 UI는 컴포넌트로 분리하여 코드의 재사용성을 높여 유지보수에 용이하게 작업 가능합니다.
                                    <br/><br/>
                                </p>
                                <div className={`${styles.career} text`}>
                                    <div className={styles.svgContainer}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="1003" height="60" viewBox="0 0 1003 60">
                                            <g transform="translate(-459 -1812)">
                                                {/* <path d="M6737,1786.5l49-40.5h614" transform="translate(-5939 76)" fill="none" stroke="#ef8585" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
                                                <g transform="translate(1088 1812)" fill="#15171a" stroke="#ef8585" strokeWidth="2">
                                                    <circle cx="10" cy="10" r="10" stroke="none"/>
                                                    <circle cx="10" cy="10" r="9" fill="none"/>
                                                </g> */}
                                                <line x2="1000.5" transform="translate(460 1862.5)" fill="none" stroke="#85ddef" strokeLinecap="round" strokeWidth="2"/>
                                                {/* <g transform="translate(1088 1852)" fill="#15171a" stroke="#85ddef" strokeWidth="2">
                                                    <circle cx="10" cy="10" r="10" stroke="none"/>
                                                    <circle cx="10" cy="10" r="9" fill="none"/>
                                                </g> */}
                                                <g transform="translate(537 1852)" fill="#15171a" stroke="#85ddef" strokeWidth="2">
                                                    <circle cx="10" cy="10" r="10" stroke="none"/>
                                                    <circle cx="10" cy="10" r="9" fill="none"/>
                                                </g>
                                                <g transform="translate(796 1852)" fill="#15171a" stroke="#85ddef" strokeWidth="2">
                                                    <circle cx="10" cy="10" r="10" stroke="none"/>
                                                    <circle cx="10" cy="10" r="9" fill="none"/>
                                                </g>
                                            </g>
                                        </svg>
                                    </div>
                                    <div className={styles.career__textContainer}>
                                        <span>UXUI 디자이너 1년<br/>웹  퍼블리셔 1년</span>
                                        <span>UXUI 디자이너 2년<br/>웹  퍼블리셔 2년</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* mind */}
                    
                    {/* aboutMe */}
                    <section className={`${styles.aboutMe} section`}>
                        <div className="inner">
                            <article className={styles.point}>
                                <TitleContainer title={`👀남들이 보는 나는`} fontSize='4.2rem' />
                                <SubTitle subTitle='동료들이 하나 같이 말하는 강점입니다.' />
                                <ul className={styles.pointBox}>
                                    {pointContents.map((item, index)=> (
                                        <PointContainer
                                        key={item.key}
                                        index={`0${index + 1}`}
                                        item={item}
                                        />
                                    ))}
                                </ul>
                            </article>
                            <article className={styles.skillContainer}>
                                <TitleContainer title={`🧊배움에 대한 목마름`} fontSize='4.2rem' />
                                <SubTitle subTitle={`배움에 대한 열정이 지금의 저를 만들었습니다.\n꾸준한 자기 계발로 결과를 증명하고 성장하는 UXUI 디자이너가 되겠습니다.`} />
                                <ul className={styles.skillBox}>
                                    {skills.map((item, index) => (
                                        <SkillContainer key={`skill${index + 1}`} item={item} />
                                    ))}
                                </ul>
                            </article>
                        </div>
                    </section>
                    {/* aboutMe */}

                    {/* projects */}
                    <section className={`${styles.projects} section`}>
                        <div className="inner">
                            <article className={styles.sliderWrap}>
                                {projects.map((item, index) => {
                                    if(currentIndex === index) {
                                        return  <Project
                                                key={item.key}
                                                item={item}
                                                index={index}
                                                />
                                    }
                                })}
                            </article>
                            <div className={styles.sliderBtnWrap}>
                                <button type="button" data-name='prev' className="btn" onClick={sliderPoject}><ArrowIcon fill='#333' /></button>
                                <div className={styles.sliderNum}><span>{`0${currentIndex + 1}`}</span> / <span>{`0${projects.length}`}</span></div>
                                <button type="button" data-name='next' className="btn" onClick={sliderPoject}><ArrowIcon fill='#333' activeFill="#aaa" /></button>
                            </div>
                        </div>
                    </section>
                    {/* projects */}

                    {/* contact */}
                    <section className={`${styles.contact} section`}>
                        <div className="inner">
                            <TitleContainer title={`💌 궁금한 점이 있다면`} fontSize='4.2rem' />
                            <SubTitle subTitle={`언제든지 메세지를 보내주세요. 확인 후 연락드리겠습니다.`} />
                            <div className={`${styles.mailForm} card-animation contents-bg`}>
                                <form onSubmit={handleSubmit}>
                                    <div className={styles.inputContainer}>
                                        <input type="text" name="from_name" value={sendEmailValue.from_name} placeholder="이름" onChange={handleChage} autocomplete="off" />
                                        <input type="email" name="email" value={sendEmailValue.email} className={`${styles.email}`} placeholder="이메일" required onChange={handleChage} autocomplete="off" />
                                        <input type="tel" name="phone" value={sendEmailValue.phone} className={`${styles.phone}`} placeholder="연락처" required onChange={handleChage} autocomplete="off" />
                                    </div>
                                    <textarea className="scroll" rows="7" name="message" value={sendEmailValue.message} placeholder="내용을 입력하세요." onChange={handleChage}></textarea>
                                    <Button type="submit" text='보내기' />
                                </form>
                            </div>
                        </div>
                    </section>
                    {/* contact */}
                </div>

                <CommonBg />
                <Modal modal={modal.active} onCloseModal={closeModal} text={modal.text} />
            </div>
        </>
    );
};

export default Home;
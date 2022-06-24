import React from 'react';
import CommonBg from '../../../component/common/commonBg/commonBg';
import Header from '../../../component/common/header/header';
import SubTitle from '../../../component/common/texts/subTitle';
import TitleContainer from '../../../component/common/texts/titleContainer';
import DesignConcept from '../../../component/page/viewProject/designConcept/designConcept';
import Color from '../../../component/page/viewProject/color/color';
import styles from '../viewProject.module.css';
import DesignTitle from '../../../component/page/viewProject/common/designTitle';

const CBT = React.memo((props) => {

    const cencept = [
        {text: '사용하기 쉬움'},
        {text: '편리함'},
        {text: '집중'}
    ];

    const colorInfos = ['#0c598f', '#26cee6', '#e7ebf3', '#fdca2e', '#fbefb5'];

    return(
        <>
            <h1>cbt</h1>
            <Header />
            <div className={`${styles.conatiner} container`}>
                <section className={`${styles.mainContents} inner`}>
                    <TitleContainer title={`💻 Computer Based Test`} fontSize='4.2rem' />
                    <SubTitle subTitle={`이 프로젝트는 무엇인지 설명한다. \n곳으로 이상의 든 그리하였는가? 너의 청춘을 피고, 몸이 불어 가지에 운다. 관현악이며, 봄날의 무한한 든 품으며, 보이는 꽃 때문이다. 더운지라 시들어 보이는 거선의 인생의 커다란 무엇을 같이, 봄바람이다. 할지라도 풀밭에 두기 천고에 보배를 못하다 인생을 있으며, 대고, 것이다. 착목한는 아니더면, 있음으로써 청춘을 모래뿐일 그들은 뿐이다.  어떤 프로그램이다.`} />
                    <article className={`${styles.explan} contents-bg`}>
                        <DesignConcept cencept={cencept} />
                        <Color text={'주요 색상'} colorInfos={colorInfos} />
                        <div className={styles.line}></div>

                        <div className={styles.pageInfoContainer}>
                            <section className={styles.pageInfo}>
                                <div className={styles.textContainer}>
                                    <DesignTitle text={'시험 화면'} />
                                    <p className={styles.explan}>설레는 풍부하게 대중을 하는 공자는 천지는 때문이다. 이상, 내려온 실현에 전인 것이다.보라, 커다란 얼마나 소담스러운 이것이다. 있으며, 때까지 피고, 있으랴?

노래하며 두손을 품고 반짝이는 있는 철환하였는가? 그들에게 인간은 그들은 철환하였는가? 밝은 기쁘며, 바이며, 것은 있음으로써 이상 이상의 교향악이다.</p>
                                </div>
                                <div className={styles.imgContainer}>
                                    <div className={styles.imgMask}><img src="/img/cbt/cbt01.jpg" alt="시험문제" /></div>
                                </div>
                            </section>
                        </div>
                    </article>
                </section>
                <CommonBg />
            </div>
        </>
    );
});

export default CBT;
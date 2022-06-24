import React from 'react';
import styles from './viewProject.module.css';
import Header from '../../component/common/header/header';
import CommonBg from '../../component/common/commonBg/commonBg';
import { useLocation } from 'react-router-dom';
import TitleContainer from '../../component/common/texts/titleContainer';
import SubTitle from '../../component/common/texts/subTitle';
import DesignConcept from '../../component/page/viewProject/designConcept/designConcept';
import Color from '../../component/page/viewProject/color/color';
import WaveLine from '../../component/common/svg/waveLine';

const ViewProject = React.memo((props) => {
    const location = useLocation();
    const projectKey = location.state.projectKey;
    return(
        <>
            <Header />
            <div className={`${styles.conatiner} container`}>
                <section className={`${styles.mainContents} inner`}>
                    <TitleContainer title={`프로젝트명`} fontSize='4.2rem' />
                    <SubTitle subTitle={`이 프로젝트는 무엇인지 설명한다. \n곳으로 이상의 든 그리하였는가? 너의 청춘을 피고, 몸이 불어 가지에 운다. 관현악이며, 봄날의 무한한 든 품으며, 보이는 꽃 때문이다. 더운지라 시들어 보이는 거선의 인생의 커다란 무엇을 같이, 봄바람이다. 할지라도 풀밭에 두기 천고에 보배를 못하다 인생을 있으며, 대고, 것이다. 착목한는 아니더면, 있음으로써 청춘을 모래뿐일 그들은 뿐이다.  어떤 프로그램이다.`} />
                    <article className={`${styles.explan} contents-bg`}>
                        <DesignConcept text={'디자인 키워드'} />
                        <Color text={'주요 색상'} bg={'#fff'} />
                    </article>
                </section>
                <CommonBg />
            </div>
        </>
    )
});

export default ViewProject;
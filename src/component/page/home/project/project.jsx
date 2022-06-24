import React, { useState, useEffect } from 'react';
import Button from '../../../common/button/button';
import SubTitle from '../../../common/texts/subTitle';
import TitleContainer from '../../../common/texts/titleContainer';
import styles from './project.module.css';
import project01 from '../../../../img/cbt.png';
import project02 from '../../../../img/focus8.jpg';
import project03 from '../../../../img/diet.png';
import project04 from '../../../../img/prevPofol.jpg';
import ViewDetail from '../../../common/modal/viewDetail/viewDetail';
import { useHistory } from 'react-router-dom';

const Project = React.memo(({item, index}) => {

    const {key, title, subTitle, feature, part, skill, url} = item;

    const [align, setAlign] = useState('start');

    const resizeLayout = () => {
        if(window.innerWidth < 1280) {
            setAlign('center');
        }else {
            setAlign('start');
        }
    };

    useEffect(() => {
        window.addEventListener('load', () => {
            resizeLayout();
        });
        window.addEventListener('resize', () => {
            resizeLayout();
        });
    });

    let projectImg;
    key === 'project01' && (projectImg = project01);
    key === 'project02' && (projectImg = project02);
    key === 'project03' && (projectImg = project03);
    key === 'project04' && (projectImg = project04);

    const clickBtn = (index) => {
        movePage(item);
        // index < 4 && movePage(item); // 팝업창 띄우기
        // index > 3 && window.open(url, '_blank');
    };

    const [viewDetail, setViewDetail] = useState(false);

    const openViewImg = () => {
        setViewDetail(true);
    };

    const closeviewImg = () => {
        setViewDetail(false);
    };

    const history = useHistory();

    const movePage = (item) => {
        //console.log(item.key);
        switch (item.key) {
            case 'project01':
                history.push('/CBT');
                //console.log( 'project01');
                break;
            case 'project02':
                window.open('https://www.focus8.co.kr/home/index.php', '_blank');
                //console.log( 'project02');
                break;
            case 'project03':
                window.open('https://imstandup94.github.io/pro_diet/', '_blank');
                //console.log( 'project03');
                break;
            case 'project04':
                window.open('https://imstandup94.github.io/prevPorfol/', '_blank');
                //console.log( 'project04');
                break;
            case 'project05':
                //console.log( 'project05');
                break;
            case 'project06':
                //console.log( 'project06');
                break;
            default:
                console.log( "어떤 값인지 파악이 되지 않습니다." );
        }
    };

    return(
        <>
            <ul className={`${styles.projectBox} card-animation contents-bg`}>
                <li className={`${styles.infoContainer} scroll`}>
                    <TitleContainer title={title} fontSize='4.2rem' style={{alignItems: align}} />
                    <SubTitle subTitle={subTitle} style={{textAlign: 'left', fontSize: '1.8rem', marginTop: '1.7em'}} />
                    {feature && <div className={`${styles.core} ${styles.info}`}>
                        <span className={styles.name}>주요 기능</span>
                        <p className={styles.explain} style={{alignSelf: (index > 2 && 'center')}}>{feature}</p>
                    </div>}
                    <div className={`${styles.part} ${styles.info}`}>
                        <span className={styles.name}>주요 역할</span>
                        <p className={styles.explain}>{part}</p>
                    </div>
                    <div className={`${styles.useSkill} ${styles.info}`}>
                        <span className={styles.name}>사용 기술</span>
                        <p className={`${styles.explain} ls-0`}>{skill}</p>
                    </div>
                    <Button
                    index={index}
                    text='자세히 보기'
                    btnDataName={'project'}
                    style={{justifyContent: align, position: 'absolute', bottom: '3.2rem'}}
                    onClickBtn={clickBtn}
                    />
                </li>
                <li className={`${styles.imgContainer} scroll`}>
                    <img src={projectImg} alt={key} />
                </li>
            </ul>
            <ViewDetail
            item={item}
            viewDetail={viewDetail}
            onCloseviewImg={closeviewImg}
            />
        </>
    );
});

export default Project;
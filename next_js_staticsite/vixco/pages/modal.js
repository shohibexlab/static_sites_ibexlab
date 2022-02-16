
import React from 'react';
import Modal from 'react-modal';


export default function Popup() {

    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(true);

    function openModal() {
        setIsOpen(!modalIsOpen);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div className='modalStyle'>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >

                <div style={{ padding: 0 }} ref={(_subtitle) => (subtitle = _subtitle)}>
                    <div className="textStyle">
                        <p className='headerText'>VIXCO 마이그레이션 공지</p>

                        <p>안녕하세요 빅스코 커뮤니티 여러분</p>
                        <p>빅스코는 투명성과 효율성 제고를 위해 심사숙고하여 VIX 토큰의 마이그레이션(migration)을 진행하게 되었습니다.</p>
                        <p>2월 16일 16:00부터 플라이빗 거래소에 빅스코 입출금이 정지됨을 알려드립니다.</p>
                        <p>마이그레이션은 락업 기능과 소각 기능 포함을 위한 진행입니다. </p>
                        <p>추후 입출금이 재개되면 공지해드리겠습니다.</p>
                        <p>이용에 불편을 드려 정말 죄송합니다.</p>

                        {/* <p>관련문의: <a href="https://ibexlab-webmaster.github.io/web-vixco.net/#service">service@vixco.net</a></p> */}
                    </div>
                </div>

                <p className='buttonStyle' onClick={closeModal}>닫기</p>
            </Modal>
        </div>
    )
}




const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '100%',
        maxWidth: 1081,
        minWidth: 300,
        maxHeight: 717,
        minHeight: '80%',
        borderRadius: 24,
        boxShadow: '0px 4px 4px 0px #00000040',
        fontFamily: "Noto Sans KR",
        display: 'flex',
        flexDirection: 'column',
        padding: 0
    },
};


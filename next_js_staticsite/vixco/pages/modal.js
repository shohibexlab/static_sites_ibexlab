
import React from 'react';
import Modal from 'react-modal';


const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 500,
        height: 500,
        border: "1px solid black",
        padding: 0,
    },
};
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
        <div  >
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >

                <div style={{ padding: 0 }} ref={(_subtitle) => (subtitle = _subtitle)}>
                    <div style={{
                        margin: 10,
                        fontSize: 18
                    }}>
                        <p style={{ fontSize: 24, textAlign: 'center', fontWeight: 600 }}>VIXCO 마이그레이션 공지</p>
                        <br></br>
                        <p>안녕하세요 빅스코 커뮤니티 여러분</p>
                        <p>빅스코는 투명성과 효율성 제고를 위해 심사숙고하여 VIX 토큰의 마이그레이션(migration)을 진행하게 되었습니다.</p>
                        <p>2월 16일 16:00부터 플라이빗 거래소에 빅스코 입출금이 정지됨을 알려드립니다.</p>
                        <p>마이그레이션은 락업 기능과 소각 기능 포함을 위한 진행입니다. </p>
                        <p>추후 입출금이 재개되면 공지해드리겠습니다.
                            이용에 불편을 드려 정말 죄송합니다.
                        </p>
                    </div>


                    <div style={{
                        background: '#555555',
                        width: '100%',
                        color: "white",
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        bottom: 0,
                        position: "absolute",
                        height: 30
                    }}>
                        <p style={{ paddingLeft: 10, alignSelf: 'center' }} onClick={closeModal}></p>
                        <button style={{
                            fontWeight: 600,
                            paddingRight: 10,
                            background: 'none',
                            color: 'white'
                        }} onClick={closeModal}>닫기</button>
                    </div>
                </div>

            </Modal>
        </div>
    )
}





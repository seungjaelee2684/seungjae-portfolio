import React from 'react'
import styled from 'styled-components';
import { GiSpiderWeb, GiSpikesHalf, GiSmallFishingSailboat } from "react-icons/gi";
import { StatusWrapper, DefaultLane, StatusIcon } from '../../pages/AboutMePage';
import { BsMinecartLoaded } from 'react-icons/bs';
import InfoModal from './InfoModal';

interface StatusLaneProps {
    statusModal: {
        information: boolean,
        state: number | undefined
    }
    setStatusModal: React.Dispatch<React.SetStateAction<{
        information: boolean,
        state: number | undefined
    }>>;
};

const StatusLane: React.FC<StatusLaneProps> = ({ statusModal, setStatusModal }) => {

    const { information, state } = statusModal;

    return (
        <DefaultLane>
            <GiSpikesHalf style={{ color: "#e5cca0" }} />
            행동특성
            <StatusWrapper>
                <StatusIcon
                    color="#294b94"
                    size={0}
                    onMouseOver={() => setStatusModal({ ...statusModal, state: 1 })}
                    onMouseLeave={() => setStatusModal({ ...statusModal, state: undefined })}>
                    <GiSmallFishingSailboat />
                </StatusIcon>
                <StatusIcon
                    color="#237014"
                    size={-2}
                    onMouseOver={() => setStatusModal({ ...statusModal, state: 2 })}
                    onMouseLeave={() => setStatusModal({ ...statusModal, state: undefined })}>
                    <GiSpiderWeb />
                </StatusIcon>
                <StatusIcon
                    color="#999b13"
                    size={-4}
                    onMouseOver={() => setStatusModal({ ...statusModal, state: 3 })}
                    onMouseLeave={() => setStatusModal({ ...statusModal, state: undefined })}>
                    <BsMinecartLoaded />
                </StatusIcon>
                {(state) && <InfoModal statusModal={statusModal} />}
            </StatusWrapper>
        </DefaultLane>
    )
};

export default StatusLane;
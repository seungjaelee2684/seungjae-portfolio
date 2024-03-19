import React from 'react'
import styled from 'styled-components';
import { GiSpiderWeb, GiSpikesHalf, GiSmallFishingSailboat } from "react-icons/gi";
import { StatusWrapper, DefaultLane, StatusIcon } from '../../pages/AboutMePage';
import { BsMinecartLoaded } from 'react-icons/bs';
import InfoModal from './InfoModal';
import { CharacterStatus } from '../../utils/Status';

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
                {CharacterStatus?.map((item: any, index: number) => {
                    return (
                        <StatusIcon
                            color={item?.color}
                            size={item?.size}
                            onMouseOver={() => setStatusModal({ ...statusModal, state: item?.id })}
                            onMouseLeave={() => setStatusModal({ ...statusModal, state: undefined })}>
                            {item?.icon}
                        </StatusIcon>
                    )
                })}
                {(state && state < 4) && <InfoModal statusModal={statusModal} />}
            </StatusWrapper>
        </DefaultLane>
    )
};

export default StatusLane;
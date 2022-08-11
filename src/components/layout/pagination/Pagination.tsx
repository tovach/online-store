import {FC} from "react";

import {SecondaryButton} from "components/ui/buttons/secondaryButton/SecondaryButton";

import styles from "./Pagination.module.scss";

interface PaginationProps {
    onClickNext: () => void,
    onClickPrev: () => void,
    disabledNext: boolean,
    disabledPrev: boolean,
}

const Pagination: FC<PaginationProps> = ({onClickNext, onClickPrev, disabledNext, disabledPrev}) => {
    return (
        <div className={styles.pagination}>
            <SecondaryButton onClick={onClickPrev} disabled={disabledPrev}>Prev</SecondaryButton>
            <SecondaryButton onClick={onClickNext} disabled={disabledNext}>Next</SecondaryButton>
        </div>
    )
}

export {Pagination}

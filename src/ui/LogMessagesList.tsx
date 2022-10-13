import * as React from 'react';
import { Button, Col, Empty, Row, Collapse } from 'antd';
import _ from 'lodash';
import { GetLogMessagesFnResultListItem } from '../dataProvider/LogMessagesDataProvider';
const { Panel } = Collapse;

export type LineFormatFn = (item: GetLogMessagesFnResultListItem) => string;

type Props = {
    inProgress: boolean;
    sequence: number;
    listItems: Array<GetLogMessagesFnResultListItem>;
    lineFormat: LineFormatFn;
    onClickLoadMore: () => void;
    loadMoreDisabled: boolean;
};

export const LogMessagesList = (props: Props) => {
    if (_.isEmpty(props.listItems)) {
        return <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />;
    }
    
    console.log('Props from list: ',props);
    return (
        <>
            <Row
                gutter={[16, 16]}
                className={'logMessagesList logMessagesListPreWrap'}
            >
                <Col span={24}>
                <Collapse accordion>
                    {props.listItems.map((item, idx) => {
                        const data = JSON.stringify(
                            item.logMessagesData.data,
                            (key, value) => {
                                // console.log('transformations', key, value)
                                let r = value
                                if( typeof value === "bigint"){
                                    r = value.toString()
                                }
                                if(key === "Principal"){
                                    // console.log('principal', value.toString())
                                    r = value.toString()
                                }
                                return r
                            },
                            2,
                        )
                        return (
                            <Panel header= {props.lineFormat(item)}  key={`${props.sequence}_${idx}`}>
                            <p>{data}</p>
                            </Panel>
                        )
                        // return (
                            
                        //     <div key={`${props.sequence}_${idx}`}>
                        //         {props.lineFormat(item)}
                        //     </div>
                        // );
                    })}
                    </Collapse>
                </Col>
                <Col>
                    <Button
                        onClick={props.onClickLoadMore}
                        disabled={props.loadMoreDisabled || props.inProgress}
                        loading={props.inProgress}
                    >
                        Load More
                    </Button>
                </Col>
            </Row>
        </>
    );
};

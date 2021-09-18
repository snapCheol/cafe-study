import styled from '@emotion/styled';
import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { Button } from '../../components';
import { getNextOrderId, orderListState } from '../../store';
import { randomNumber } from '../../util/number';

export function OrderDetail() {
  const [orders, setOrders] = useRecoilState(orderListState);
  const nextOrderId = useRecoilValue(getNextOrderId);

  const handleRandomOrder = () => {
    const newOrder = {
      orderId: nextOrderId,
      orderCount: randomNumber(),
      orderPrice: randomNumber(1000, 20000),
      orderDetail: [{}],
    };

    setOrders((orders) => [...orders, newOrder]);
  };

  const buttonText = '랜덤 주문 생성';

  return (
    <OrderDetailWrapper>
      {/* 
      화면상 주문을 이곳에서 확인하고 주문 완료시에 리스트로 넘어가는 기능을 구현
      랜덤 주문 생성은 recoil 사용법을 가이드 함
      */}
      <OrderDetailHead>
        <div>주문번호: A-37</div>
        <div>전체: 10개</div>
        <div>주문번호: 37,200 원</div>
      </OrderDetailHead>
      <OrderDetailBody>
        <OrderDetailList>
          <thead>
            <tr>
              <th>품목</th>
              <th>수량</th>
              <th>금액</th>
              <th>포장</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>아메리카노 (T)</td>
              <td>2</td>
              <td>6.600</td>
              <td>
                <input type='checkbox' />
              </td>
            </tr>
            <tr>
              <td>아메리카노 (T)</td>
              <td>2</td>
              <td>6.600</td>
              <td>
                <input type='checkbox' />
              </td>
            </tr>
            <tr>
              <td>아메리카노 (T)</td>
              <td>2</td>
              <td>6.600</td>
              <td>
                <input type='checkbox' />
              </td>
            </tr>
            <tr>
              <td>아메리카노 (T)</td>
              <td>2</td>
              <td>6.600</td>
              <td>
                <input type='checkbox' />
              </td>
            </tr>
            <tr>
              <td>아메리카노 (T)</td>
              <td>2</td>
              <td>6.600</td>
              <td>
                <input type='checkbox' />
              </td>
            </tr>
            <tr>
              <td>아메리카노 (T)</td>
              <td>2</td>
              <td>6.600</td>
              <td>
                <input type='checkbox' />
              </td>
            </tr>
            <tr>
              <td>아메리카노 (T)</td>
              <td>2</td>
              <td>6.600</td>
              <td>
                <input type='checkbox' />
              </td>
            </tr>
          </tbody>
        </OrderDetailList>
      </OrderDetailBody>
      <OrderDetailFoot>
        <Button label='취소' onClick={() => {}} />
        <Button label='다시주문하기' onClick={() => {}} />
        <Button varient='confirm' label='주문' onClick={() => {}} />
      </OrderDetailFoot>
      <Button onClick={handleRandomOrder} label={buttonText} />
    </OrderDetailWrapper>
  );
}

const OrderDetailWrapper = styled.div``;
const OrderDetailHead = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
`;
const OrderDetailBody = styled.div`
  overflow-y: auto;
  max-height: 400px;
`;
const OrderDetailList = styled.table`
  width: 100%;
  margin-top: 10px;
  th,
  td {
    height: 40px;
    text-align: center;
  }
`;

const OrderDetailFoot = styled.div`
  display: flex;
  margin-top: auto;
  justify-content: space-between;

  > button + button {
    margin-left: 10px;
  }
`;

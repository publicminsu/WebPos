import {React,useState} from "react";
import { TableRow,Tab,Label,Comment,Table,List,Image as ImageComponent,Item,Card,Menu,Message,Grid,Header,Button,Form,Segment,Image,Container, Sticky } from "semantic-ui-react";
import './component/homeComponent.css'


let tableSetting = localStorage.getItem('tableSetting')? JSON.parse(localStorage.getItem('tableSetting')) : [
    {tableNumber:1,tableName:'red'},
    {tableNumber:2,tableName:'yellow'},
    {tableNumber:3,tableName:'olive'},
    {tableNumber:4,tableName:'green'},
    {tableNumber:5,tableName:'teal'},
    {tableNumber:6,tableName:'blue'},
    {tableNumber:7,tableName:'violet'},
    {tableNumber:8,tableName:'purple'},
    {tableNumber:9,tableName:'pink'},
    {tableNumber:10,tableName:'예약'},
    {tableNumber:11,tableName:'yellow'},
    {tableNumber:12,tableName:'예약'},
    {tableNumber:13,tableName:'혼밥'},
    {tableNumber:14,tableName:'혼밥'},
    {tableNumber:15,tableName:'혼밥'},
  ];

  

function UserOrder(props){
    const panes = [
        { menuItem: '메인 메뉴', render: () => <Tab.Pane>Tab 1 Content</Tab.Pane> },
        { menuItem: '사이드 메뉴', render: () => <Tab.Pane>Tab 2 Content</Tab.Pane> },
        { menuItem: '주류', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> },
      ]
      
      let [total,setTotal] = useState(0);

    let [table,setTable]=useState(tableSetting);

    let [temporaryOrder,setTemporaryOrder] = useState([]);

    table.map((e,i)=>{
      localStorage.setItem(`secretNumber${i+1}`,Math.round(Math.random()*99999999));
    })
    let [menuList, setMenuList] = useState([
        {product:'삼선짬뽕',price:9000,count:0},
        {product:'군만두',price:3000,count:0},
        {product:'쌀국수',price:12000,count:0},
        {product:'짜사이',price:2000,count:0},
        {product:'코코넛',price:1000,count:0},
        {product:'반미',price:1500,count:0},
      ]);

      function clearMenuCount(){
        setMenuList([
          {product:'삼선짬뽕',price:9000,count:0},
          {product:'군만두',price:3000,count:0},
          {product:'쌀국수',price:12000,count:0},
          {product:'짜사이',price:2000,count:0},
          {product:'코코넛',price:1000,count:0},
          {product:'반미',price:1500,count:0},
        ])
      }

    return(
        <>
        <Header as='h3' icon='food' content={`${props.option}번 테이블`}/>

        <Tab panes={panes} menu={{color:'teal'}} />
        <Card.Group itemsPerRow={2}>
            {menuList.map((e)=>{
                return(
                    <Card color="teal" onClick={()=>{
                        e.tableNumber = props.option
                        e.time = new Date().getTime();
                        e.count = e.count + 1;
                        setTotal(total + e.price);
                        // temporaryOrder.push(e);
                        // (e.count ==1 ? temporaryOrder.push(e) : null)
                        if(e.count ==1) temporaryOrder.push(e);
                        setTemporaryOrder([...temporaryOrder]); 
                    }}>
                        <Card.Content>
                            <Card.Header content={e.product}></Card.Header>
                            <Card.Meta content={e.price}></Card.Meta>
                        </Card.Content>
                    </Card>
                )
            })}
        
        </Card.Group>
        <Segment className="no-scroll" style={{overflow:'scroll',height:'130px'}} >
        
                  <Table fixed selectable singleLine >
                  
                  <Table.Body  >
                     

                      {JSON.parse(localStorage.getItem((props.option).toString())) != null ?
                      <>
                      {
                        
                      JSON.parse(localStorage.getItem((props.option).toString())).map((e)=>{
                        return(
                          
                          <TableRow>                            
                            <Table.Cell>{`${e.product} / ${e.price}원 / ${e.count}개`}</Table.Cell>                            
                          </TableRow>
                          
                        )
                      })
                    }
                    {
                       temporaryOrder.map((e)=>{
                        
                        return(
                          <TableRow>
                                <Table.Cell>{`${e.product} / ${e.price}원 / ${e.count}개`}</Table.Cell>
                          </TableRow>
                        )
                      })
                    }
                    </>
                      :
                      temporaryOrder.map((e)=>{ 
                        return(
                        <TableRow>
                            <Table.Cell>{`${e.product} / ${e.price}원 / ${e.count}개`}</Table.Cell>
                        </TableRow>
                          
                        )
                        
                      })
                      
                    }
                    
                      </Table.Body>
              </Table>
        </Segment>
        <Segment>
            <Header as='h3'>{`가격: ${localStorage.getItem(`${props.option}sum`)?JSON.parse(localStorage.getItem(`${props.option}sum`))+total: total} 원`}</Header>
        </Segment>
        <Segment>
            <Button color="teal" onClick={()=>{
                alert('주문');
            }}>주문</Button>
            <Button color="red" onClick={()=>{
                setTemporaryOrder([]);
                setTotal(0);
                clearMenuCount();
            }}>취소</Button>

        </Segment>
        </>
    )
}

export default UserOrder
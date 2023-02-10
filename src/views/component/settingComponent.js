import {React,useRef,useState} from "react";
import { TextArea,Label,Input,Divider,Checkbox,Rail,Icon,Comment,Table,List,Image as ImageComponent,Item,Card,Menu,Message,Grid,Header,Button,Form,Segment,Image,Container, TableRow, Flag } from "semantic-ui-react";
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from "react-redux";
import Draggable, { DraggableData, DraggableEvent } from "react-draggable";

function EditUserInfo(){
    
    return(
        <Form>
        <Form.Field>
          <label>닉네임</label>
          <input placeholder='First Name' value='알베르 카뮈' />
        </Form.Field>
        <Form.Field>
          <label>현재 비밀번호</label>
          <input placeholder='present password' />
        </Form.Field>
        <Form.Field>
        </Form.Field>
        <Form.Field>
          <label>변경 비밀번호</label>
          <input placeholder='password' />
        </Form.Field>
        <Form.Field>
          <label>변경 비밀번호 확인</label>
          <input placeholder='password check' />
        </Form.Field>
        <Form.Field>
          <Checkbox label='I agree to the Terms and Conditions' />
        </Form.Field>
        <Form.Field>
          <label>이메일</label>
          <input placeholder='E-mail' />
        </Form.Field>
        <Form.Field>
          <label>전화번호</label>
          <input placeholder='Phone-number' />
        </Form.Field>
        <Form.Field>
          <Checkbox label='I agree to the Terms and Conditions' />
        </Form.Field>
        <Button type='submit'>변경</Button>
      </Form>
    )
}
        
    

function EditMarketInfo(){
    return(
        <>
    <Form>
    <Form.Field>
      <label>상호명</label>
      <input placeholder='Name' value='행복 맥주' />
    </Form.Field>
    <Form.Field>
      <label>오픈 시간</label>
      <input placeholder='Opening time' value='18:00pm' />
    </Form.Field>
    <Form.Field>
    </Form.Field>
    <Form.Field>
      <label>마감 시간</label>
      <input placeholder='마감 시간' value='00:00am' />
    </Form.Field>
    <Form.Field>
      <label>check</label>
      <Checkbox label=' 예약 ' />
      <Checkbox label=' 대기 ' />
      <Checkbox label=' 실시간 조회 ' />
      
    </Form.Field>
    <Form.Field>
    <label>주소</label>
      <input placeholder='Address' value='안성시 비룡2길 32' />
    </Form.Field>
    <Form.Field>
      <Checkbox label='I agree to the Terms and Conditions' />
    </Form.Field>
    <Form reply >
    <label>가게 소개</label>
            <TextArea value='종합 정신병 치료제 생맥주' />
            <Button content='Add Reply' labelPosition='left' icon='edit' primary />
            </Form>
      </Form>
  
  </>
    )

}

function EditMenu(){
    return(
        <>
        
        <Grid columns={2} divided>
        <Grid.Row stretched>
          <Grid.Column>
            <Segment>
                <Form>
                <Input icon='food' iconPosition='left' placeholder='Menu' />
                </Form>
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>
                <Form>
                <Input icon='won sign' iconPosition='left' placeholder='price' />
                </Form>
            </Segment>
          </Grid.Column>
        </Grid.Row>
        </Grid>
        <Grid columns={2} divided>
        <Grid.Row stretched>
          <Grid.Column>
            <Segment>
                <Form>
                <Input icon='food' iconPosition='left' placeholder='Menu' />
                </Form>
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>
                <Form>
                <Input icon='won sign' iconPosition='left' placeholder='price' />
                </Form>
            </Segment>
          </Grid.Column>
        </Grid.Row>
        </Grid>
        <Grid columns={2} divided>
        <Grid.Row stretched>
          <Grid.Column>
            <Segment>
                <Form>
                <Input icon='food' iconPosition='left' placeholder='Menu' />
                </Form>
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>
                <Form>
                <Input icon='won sign' iconPosition='left' placeholder='price' />
                </Form>
            </Segment>
          </Grid.Column>
        </Grid.Row>
        </Grid>
        <h1></h1>
        <Button>변경</Button>
      </>
    )

}

function EditTable(){
  const nodeRef = useRef(null);
  const [table,setTable]=useState([]);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [Opacity, setOpacity] = useState(false);
  const trackPos = (data) => {
    setPosition({ x: data.x, y: data.y });
  };
  const handleStart = () => {
    setOpacity(true);
    console.log(position.x.toFixed(0),position.y.toFixed(0))
  };
  const handleEnd = () => {
    setOpacity(false);
  };
    return(
      <Grid style={{height:'100%'}}>
        <Grid.Column stretched width={12}>
        <Segment>
          {table.map((e,i)=>{
            return(
              <Draggable
              nodeRef={nodeRef}
              onDrag={(e, data) => trackPos(data)}
              onStart={handleStart}
              onStop={handleEnd}
            >
              <div
                ref={nodeRef}
                style={{ opacity: Opacity ? "0.6" : "1", width:'90px' }}            
              >
                <Card 
                color="green"
                style={{height:'30%', overflow:'hidden'}}>
                  <Card.Content >
                    <Card.Header content={`${i}${e}`}/>
                    <Card.Meta content={`기본석`} />
                  </Card.Content>
                </Card>
              </div>
            </Draggable>
            )
          })}
        
        </Segment>
      </Grid.Column>
      <Grid.Column width={4}>
        <Menu style={{height:'100%'}} fluid vertical tabular>
          <Menu.Item
            name='1x1 테이블'
            onClick={()=>{
              setTable([...table,'T']);
            }
          }  
          />
          <Menu.Item
            name='2x2테이블'
            onClick={()=>{
              setTable([...table,'T']);
            }
          }
          />
          <Menu.Item
            name='3x3 테이블'
            onClick={()=>{
              setTable([...table,'T']);
            }
          }
          />
          <Menu.Item
            name='4x4 테이블'
            onClick={()=>{
              setTable([...table,'T']);
            }
          }
          />
          <Menu.Item
            name='문'
            onClick={()=>{
              setTable([...table,'T']);
            }
          }
          />
          <Menu.Item
            name='다찌 테이블'
            onClick={()=>{
              setTable([...table,'T']);
            }
          }
          />
          <Menu.Item
            name='카운터'
            onClick={()=>{
              setTable([...table,'T']);
            }
          }
          />
          <Button onClick={()=>{alert('저장')}} primary fluid style={{marginTop:'100%'}}>
            Save
          </Button>
        </Menu>
      </Grid.Column>

      
    </Grid>
    )
}

function SalesStatistics(){
    return(
      <>
        <h2>통계임</h2>
        <h2>어쩌구저쩌구</h2>
        </>
    )
}

function ReviewComment(){
    return(
        <Comment.Group threaded>
            <Header as='h3' dividing>
            Comments
            </Header>

            <Comment>
            <Comment.Avatar as='a' src='https://react.semantic-ui.com/images/avatar/small/matt.jpg' />
            <Comment.Content>
                <Comment.Author as='a'>Matt</Comment.Author>
                <Comment.Metadata>
                <span>Today at 5:42PM</span>
                </Comment.Metadata>
                <Comment.Text>How artistic!</Comment.Text>
                <Comment.Actions>
                <a>Reply</a>
                </Comment.Actions>
            </Comment.Content>
            </Comment>

            <Comment>
            <Comment.Avatar as='a' src='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' />
            <Comment.Content>
                <Comment.Author as='a'>Elliot Fu</Comment.Author>
                <Comment.Metadata>
                <span>Yesterday at 12:30AM</span>
                </Comment.Metadata>
                <Comment.Text>
                <p>This has been very useful for my research. Thanks as well!</p>
                </Comment.Text>
                <Comment.Actions>
                <a>Reply</a>
                </Comment.Actions>
            </Comment.Content>

            <Comment.Group>
                <Comment>
                <Comment.Avatar as='a' src='https://react.semantic-ui.com/images/avatar/small/jenny.jpg' />
                <Comment.Content>
                    <Comment.Author as='a'>Jenny Hess</Comment.Author>
                    <Comment.Metadata>
                    <span>Just now</span>
                    </Comment.Metadata>
                    <Comment.Text>Elliot you are always so right :</Comment.Text>
                    <Comment.Actions>
                    <a>Reply</a>
                    </Comment.Actions>
                </Comment.Content>
                </Comment>
            </Comment.Group>
            </Comment>

            <Comment>
            <Comment.Avatar as='a' src='https://react.semantic-ui.com/images/avatar/small/joe.jpg' />
            <Comment.Content>
                <Comment.Author as='a'>Joe Henderson</Comment.Author>
                <Comment.Metadata>
                <span>5 days ago</span>
                </Comment.Metadata>
                <Comment.Text>Dude, this is awesome. Thanks so much</Comment.Text>
                <Comment.Actions>
                <a>Reply</a>
                </Comment.Actions>
            </Comment.Content>
            </Comment>

            <Form reply>
            <Form.TextArea />
            <Button content='Add Reply' labelPosition='left' icon='edit' primary />
            </Form>
        </Comment.Group>

    )
}

function EditPreferences(){
    return(
        <>
        <Segment.Group horizontal >
            <Segment>언어</Segment>
            <Segment>
                <List selection verticalAlign='middle'>
                
                <List.Item>
                <List.Content>
                <Flag name="kr"/>
                <List.Header>Korean</List.Header>
                </List.Content>
                </List.Item>
                <List.Item>
                <Flag name="us"/>
                <List.Content>
                    <List.Header>English</List.Header>
                </List.Content>
                </List.Item>
                <List.Item>
                <Flag name="jp"/>
                <List.Content>
                    <List.Header>Japanese</List.Header>
                </List.Content>
                </List.Item>
            </List>
            </Segment>
            
        </Segment.Group>
        <Segment.Group horizontal>
            <Segment>다크모드</Segment>
            <Segment><Checkbox toggle style={{backgroundColor:'lightGrey'}} ></Checkbox></Segment>
        </Segment.Group>
        <Segment.Group horizontal>
            <Segment>토글시 소리 출력</Segment>
            <Segment><Checkbox toggle style={{backgroundColor:'lightGrey'}}></Checkbox></Segment>
        </Segment.Group>
        
        </>
    )
}

function SystemInfo(){
    let country =window.navigator.language;
    let a = window.navigator.geolocation; 
    let user = window.navigator.userAgent;
    return(
        <>
        <Divider horizontal>
      <Header as='h4'>
        <Icon name='bar chart' />
        Specifications
      </Header>
    </Divider>

    <Table definition>
      <Table.Body>
        <Table.Row>
          <Table.Cell width={2}>Country</Table.Cell>
          <Table.Cell>{country}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>System-version</Table.Cell>
          <Table.Cell>hellopos.1.34</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Connection environment</Table.Cell>
          <Table.Cell>{user}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Smell</Table.Cell>
          <Table.Cell>good</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
        </>
    )

}




export{
    EditUserInfo,
    EditMarketInfo,
    EditMenu,
    EditTable,
    SalesStatistics,
    ReviewComment,
    EditPreferences,
    SystemInfo,
}
import { Component } from 'react';
import logo from '../assets/logo512.png';
import 'bulma/css/bulma.min.css';
import { Button, Navbar } from 'react-bulma-components';
import { Form } from 'react-bulma-components';
const { Input } = Form;

const navbarStyle = ({
    backgroundColor: 'orange',
  });

export default class NavbarSearch extends Component<{}, {bookName: string}> {
    constructor(props:any) {
        super(props);
        this.state = {
            bookName: '',
        }

        this.onChangeBookName = this.onChangeBookName.bind(this);
        this.onClick = this.onClick.bind(this);
    }


    onChangeBookName(e:any) {
        this.setState({
            bookName: e.target.value
        });
    }

    componentDidMount() {

    }

    onClick(e:any) {
        e.preventDefault();
        
        const input = {
            bookName: this.state.bookName,
        }

        window.location.href = '/detail/' + input.bookName;
    }
    
    render() {
        return (
            <div className="container-fluid"> 
                <Navbar style={navbarStyle}>
                    <Navbar.Brand>
                        <Navbar.Item href="#">
                        <img
                            alt="logo"
                            src={logo}
                        />
                        </Navbar.Item>
                    </Navbar.Brand>
                    <Navbar.Menu>
                        <Navbar.Container>
                        <Navbar.Item>
                            Books Finder with React
                        </Navbar.Item>
                        </Navbar.Container>
                        <Navbar.Container align="right">
                        <Navbar.Item>
                            {/* <Field>
                                <Control> */}
                                    <Input placeholder="Cari buku....." 
                                     value={this.state.bookName}
                                     onChange={this.onChangeBookName}  />
                                    <Button type='button' onClick={this.onClick}> Search </Button>
                                {/* </Control>
                            </Field> */}
                        </Navbar.Item>
                        </Navbar.Container>
                    </Navbar.Menu>
                </Navbar>
            </div>
        );
    }
}

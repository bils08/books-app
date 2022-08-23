/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react-hooks/rules-of-hooks */
import axios from 'axios';
import { Component } from 'react';
import 'bulma/css/bulma.min.css';
import { Block, Table, Box, Notification, Button } from 'react-bulma-components'; 
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'


const params = window.location.href.split('/')[4];

const BookList = (props:any) => ( 
    <tr key={props.id}>
        <td>{props.content.volumeInfo.title}</td>
        <td><img src={props.content.volumeInfo.imageLinks.thumbnail} ></img></td>
        <td>{props.content.volumeInfo.authors}</td>
        <td><Rater total={5} rating={2} /></td>
        <td><Button type="button" onClick={() => { props.addWhislist(props)}}>Add to whislist!</Button></td>
    </tr>
)

export default class DetailPage extends Component<{}, {content: any, input:string, alert:any}> {
    constructor(props:any) {
        super(props);
        this.state = {
            content : [],
            input : params,
            alert: false
        }
        this.addWhislist = this.addWhislist.bind(this)
    }

    async componentDidMount() {
        await axios.get("https://www.googleapis.com/books/v1/volumes?q={" + this.state.input + "}")
            .then(response => {
                this.setState({ content: response.data.items});
                return this.state.content.map((el:any) => {
                    console.log(el.volumeInfo.title);
                    return<BookList content={el} key={el.id} />;
                })
            })
            .catch((error) => {
                console.log(error);
            })
        }

    bookList() {
        return this.state.content.map((el:any) => {
            return<BookList content={el} addWhislist={this.addWhislist} key={el.id} />;
        })
    }

    async addWhislist(payload:any) {
        const whislist = {
            data: {
                title: payload.content.volumeInfo.title,
                content: payload.content.volumeInfo.title,
            }
          }

        await axios.post("http://localhost:5000/whislist/add", whislist)
            .then(async res => {
                this.setState({alert: true});
                console.log(res.data);
                alert("Whislist berhasil disimpan");
            })
            .catch((error) => {
                console.log(error);
            })
            console.log(this.state.alert);
    }
    
    render() {
        return (
            <div className="container-fluid"> 
                <Block>
                    <Notification color="info">
                        Daftar Buku Sesuai Keyword Pencarian
                    </Notification>
                </Block>
                <Box>
                    <Table>
                        <thead>
                            <tr>
                                <th>
                                    Judul Buku
                                </th>
                                <th>
                                    Gambar
                                </th>
                                <th>
                                    Authors
                                </th>
                                <th>
                                    Rating
                                </th>
                                <th>
                                    Whislist
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                        {this.bookList()}
                        </tbody>
                    </Table>
                </Box>       
            </div>
        );
    }
}

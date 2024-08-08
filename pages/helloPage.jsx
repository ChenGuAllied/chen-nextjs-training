import {React, useEffect, useState} from 'react';
export default function HelloPage() {
    var [helloData, setHelloData] = useState({
        name: '',
        message: ''
    });
    console.log('name 1: ', helloData.name);
    useEffect(() => {
        async function fetchData() {
            const res = await fetch ('http://localhost:3000/api/hello3', 
                {
                    body: JSON.stringify({ 
                        name: 'test',
                        message: 'here'
                    })
                }
            );
            helloData = await res.json();
        }
        fetchData();
    }, []);

    // componentDidMount() {
    //     this.fetchData();
    // }

    // fetchData = async() => {
    //     const res = await fetch ('http://localhost:3000/api/hello3', 
    //         {
    //             body: JSON.stringify({ 
    //                 name: 'test',
    //                 message: 'here'
    //             })
    //         }
    //     );
    //     helloData = await res.json();
    // }
    
    // render() {
        return (
            <div>
                {helloData}
            </div>
        );
    // }
}
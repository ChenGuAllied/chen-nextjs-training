'use client'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

interface CountProps {

}

interface CountState {
  count: number
}

interface UserPreviewProps {
    firstname: string;
    lastname: string;
}

interface UserPreviewState {
    fullname: string;
}

interface SubmitButtonProps {
	child: string;
	styles: CSSProperties | undefined;
}

interface ShouldUpdateProps {
	num: number;
}

interface SnapshotList {
	list: any[];
}

interface Clock {
	date: Date;
}

import React, { CSSProperties } from 'react';
import ReactDOM from "react-dom";

class Counter extends React.Component<CountProps, CountState> {
	constructor(props: any) {
		super(props);
		this.state = {
			count: 0
		};

		this.setCount = this.setCount.bind(this);
	}

	setCount() {
		this.setState({count: this.state.count + 1});
	}

	render() {
		return (
			<div>
				<h1>Counter</h1>
				<button onClick={this.setCount}>Click to add</button>
				<p>Count: {this.state.count}</p>
			
				{/* <p>
					<BrowserRouter>
						<Routes>
							<Route path="user-preview" element={<UserPreview firstname={'John'} lastname={'Doe'} />}>
								drived
							</Route>
						</Routes>
					</BrowserRouter>
				</p> */}

				{/* <p>
					<Link to={"./user-preview"}>
						Dashboard
					</Link>
				</p> */}
			</div>
		)
	}
}

// export default Counter

class App extends React.Component { 
  
	render() { 

		return ( 
		<div> 
			{/* <UserPreview firstname="Mark" lastname="Johnson"></UserPreview>  */}
			{/* <SubmitButton child="Render Button" styles={{color: 'green'}}></SubmitButton> */}
			{/* <ShowWholeNumber num={83.64}></ShowWholeNumber> */}
		</div> 
		) 
	} 
} 

class UserPreview extends React.Component<UserPreviewProps, UserPreviewState> {
	
	constructor(props: any) {
		super(props);
		this.state = {
			fullname: ""
		};
	}


	static getDerivedStateFromProps(props: UserPreviewProps, state: UserPreviewState) {
		return {
			fullname: `${props.firstname} ${props.lastname}`
		}
	}

	render() {
		return (
			<div>
				<h1>{this.state.fullname}</h1>
            </div>
        )
	}
}

// export default App

class SubmitButton extends React.Component<SubmitButtonProps> {
	render() {
		return (
			<button
				type="submit"
				style={this.props.styles}
			>
				{this.props.child}
			</button>
		);
	}
}

class NASACounter extends React.Component<CountProps, CountState> {
	constructor(props: any) {
		super(props);
		this.state = {
			count: 10
		};
	}

	componentDidMount() {
		const myTimer = setInterval(() => {
		this.state.count > 0
			? this.setState({ count: this.state.count - 1 })
			: clearInterval(myTimer);
		}, 1000);
	}

	render() {
		return (
		<div>
			<h1>
				NASA Countdown: <br /> {this.state.count || "🪐"} <br />
				{"⭐".repeat(this.state.count) || "🚀"}
			</h1>
			{this.state.count === 0 && <h2>LIFT OFF!!!</h2>}
		</div>
		);
	}
}

// export default NASACounter

class ShowWholeNumber extends React.Component<ShouldUpdateProps> {
	shouldComponentUpdate(nextProps: ShouldUpdateProps, nextState: ShouldUpdateProps) {
		return Math.round(nextProps.num) === Math.round(this.props.num);
	}

	render() {
		return (
			<div>
				The Whole number is: {Math.round(this.props.num)}
			</div>
		)
	}
}
  
class Snapshot extends React.Component { 
  
	// Initializing the state 
	state = { 
	  name: 'LOWE\'s Motor Speedway', 
	}; 
	
	componentDidMount() { 
	
	  // Changing the state after 1 sec 
	  setTimeout(() => { 
		this.setState({ name: 'Charlotte Motor Speedway' }); 
	  }, 1000); 
	} 
	
	getSnapshotBeforeUpdate(prevProps: any, prevState: any) { 
	
		const prevElement = document.getElementById('prev');
		// Displaying the previous value of the state 
		if (prevElement) {
			prevElement.innerHTML = 
			'Previous Name: ' + prevState.name; 
		}
	} 
	
	componentDidUpdate() { 
	
		const newElement = document.getElementById('new');
		// Displaying the current value of the state 
		if (newElement) {
			newElement.innerHTML = 
				'Current Name: ' + this.state.name; 
		}
	} 
	
	render() { 
	  return ( 
		<div> 
		  <div id="prev"></div> 
		  <div id="new"></div> 
		</div> 
	  ); 
	} 
  } 
	
//   export default Snapshot

class ScrollingList extends React.Component<SnapshotList> {
	listRef: any;
    constructor(props: any){
        super(props);
        this.listRef = React.createRef();
    }

    getStaticContent() {
        const result = [];
        for( let i= 1; i <=100; i++){
            result.push(<li key={i}>{i}This is paragraph line-{i}</li>);
        }
        return result;
		
    }

    getSnapshotBeforeUpdate(preProps: any, preState: any) {
        // const list = this.listRef.current;
        // console.log(list);
        if(preProps.list.length > this.props.list.length) {
            const list = this.listRef.current;
            console.log(list);
            return list.ScrollingHeight - list.ScrollTop;
        }
        return null;
    }

    componentDidUpdate(preProps: any, preState: any, snapshot: any) {
        console.log(snapshot);
        if (snapshot !== null) {
            const list = this.listRef.current;
            list.scrollTop = list.scrollHeight - snapshot;
        }
    }

    render() {
        return(

            <div ref={this.listRef}>
				<div className="content-wrap">
					<ul>
						{this.getStaticContent()}
					</ul>
                    </div>
            </div>

        );
    }
}

// export default ScrollingList

class Clock extends React.Component<Clock, Clock> {
	timerID: any;
	state: any;
  constructor(props: any) {
    super(props);   
    this.state = {
      date: new Date()
    };
  }
  tick() {   
    this.setState({
      date: new Date()
    });
  }
  // These methods are called "lifecycle hooks".
  componentDidMount() {
    console.log("Clock", "componentDidMount");
    this.timerID = setInterval(() => {
      this.tick();
    }, 1000);
  }
  // These methods are called "lifecycle hooks".
  componentWillUnmount() {
    console.log("Clock", "componentWillUnmount");
    clearInterval(this.timerID);
  }
  render() {
    return (        
        <div>It is {this.state.date.toLocaleTimeString()}.</div>
    );
  }
}

export default Clock
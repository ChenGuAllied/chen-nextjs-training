'use client'
import React from 'react'

interface UserPreviewProps {
    firstname: string;
    lastname: string;
}

interface UserPreviewState {
    fullname: string;
}

class UserPreview1 extends React.Component<UserPreviewProps, UserPreviewState> {
	
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

export default UserPreview1
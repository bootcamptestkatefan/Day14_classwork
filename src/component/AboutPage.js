import React, {component} from 'react'

export default class AboutPage extends component{
    
    onClick = () => {
        console.log('fghjkl')
        const {history} = this.this.props
        history.go(1)
    }
    render(){
        return (
            <div>
                About Page
                <button onClick={this.onClick}>go back</button>
            </div>
        )
    }
}
import React from 'react'
import { Container } from 'reactstrap'
import CustomWidget from '../../Components/Widget/CustomWidget'

const WidgetExample = () => {
    return (
        <Container>
            <h4 className="text-center">Widget Component</h4>
            <h6 className="text-secondary text-center">Widget Colour (Style)</h6>
            <div className="d-flex justify-content-between mb-3">
                <CustomWidget 
                    Title="Primary"
                    Subtitle="Subtitle"
                    Style='primary'
                />
                <CustomWidget 
                    Title="Secondary"
                    Subtitle="Subtitle"
                    Style='secondary'
                />
                <CustomWidget 
                    Title="Outline"
                    Subtitle="Subtitle"
                    Style='outline'
                />
            </div>
            <h6 className="text-secondary text-center">Widget Size</h6>
            <div className="d-flex justify-content-between mb-3">
                <CustomWidget 
                    Title="Primary"
                    Subtitle="small"
                    Style='primary'
                    Size='small'
                />
                <CustomWidget 
                    Title="Secondary"
                    Subtitle="medium (Default)"
                    Style='secondary'
                    Size='medium'
                />
                <CustomWidget 
                    Title="Outline"
                    Subtitle="large"
                    Style='outline'
                    Size='large'
                />
            </div>
        </Container>
    )
}

export default WidgetExample

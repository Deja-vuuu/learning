
import React from 'react'
import { render } from '@testing-library/react'
import Button from './index'
describe('测试',()=>{
    it('should', function () {
        const wrapper = render(<Button>Nice</Button>)
        const element = wrapper.getByText('Nice') as HTMLButtonElement
        expect(element).toBeInTheDocument()
        expect(element.tagName).toEqual('BUTTON')
    });
})

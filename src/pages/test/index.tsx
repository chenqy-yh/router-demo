import { QForm, QInput } from '@/components'
import { Form, Input, Row } from 'antd'
import styled from 'styled-components'


const TestPage = () => {
    return (
        <div>
            <h1>Test Page</h1>
            <QForm>
                <QForm.Item label='name'>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                        <QInput />
                        <QInput />
                    </div>
                </QForm.Item>
            </QForm>
            <Form labelCol={{
                span: 1,
                offset: 0
            }}>
                <Form.Item label='name'>
                    <Form.Item  >
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <QInput />
                            <QInput />
                        </div>
                    </Form.Item>
                </Form.Item>
            </Form>
        </div>
    );
}

export default TestPage;
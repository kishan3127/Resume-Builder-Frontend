import { Form, Input, Button, Checkbox, Row, Col, Slider, Select } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";

const { TextArea } = Input;

import { Text } from "../../screens/styles";
const { Option, OptGroup } = Select;

function EmployeeForm() {
  return (
    <>
      <Row>
        <Col span={20}>
          <Row>
            <Col span={20}>
              <Text
                fl="unset"
                fs="18px"
                mt="15px"
                fw="600"
                color="#595959"
                mb="30px"
              >
                Basic Information:
              </Text>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row>
        <Col span={20}>
          <Row>
            <Col span={20}>
              <Form.Item
                label="Name"
                name="name"
                rules={[
                  { required: true, message: "Please input Employee Name!" },
                ]}
              >
                <Input placeholder="Employee Name" />
              </Form.Item>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row>
        <Col span={20}>
          <Row>
            <Col span={20}>
              <Form.Item
                label="Email Address"
                name="email"
                rules={[
                  { required: true, message: "Please input correct Email" },
                ]}
              >
                <Input placeholder="Email" />
              </Form.Item>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row>
        <Col span={20}>
          <Row>
            <Col span={20}>
              <Form.Item
                label="Contact"
                name="contact"
                rules={[
                  { required: true, message: "Please input Contact Info" },
                ]}
              >
                <Input placeholder="Contact" />
              </Form.Item>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row>
        <Col span={20}>
          <Row>
            <Col span={20}>
              <Form.Item
                label="Department"
                name="department"
                rules={[
                  { required: true, message: "Please select the department" },
                ]}
              >
                <Select style={{ width: 200 }}>
                  <Option value="Accounts">Accounts</Option>
                  <Option value="BA">BA</Option>
                  <Option value="Business Development">
                    Business Development
                  </Option>
                  <Option value="Design Marketing">Design Marketing</Option>
                  <Option value="Human Resource">Human Resource</Option>
                  <Option value="Java">Java</Option>
                  <Option value="Mobile">Mobile</Option>
                  <Option value="Odoo">Odoo</Option>
                  <Option value="PHP">PHP</Option>
                  <Option value="Quality Analyst">Quality Analyst</Option>
                  <Option value="Support and Maintenance">
                    Support and Maintenance
                  </Option>
                  <Option value="System Admin">System Admin</Option>
                  <Option value="UI/UX">UI/UX</Option>
                  <Option value="Other">Other</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row>
        <Col span={20}>
          <Row>
            <Col span={20}>
              <Form.Item name={["intro", "title"]} label="Introduction Title">
                <Input.TextArea />
              </Form.Item>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row>
        <Col span={20}>
          <Row>
            <Col span={20}>
              <Form.Item
                name={["intro", "description"]}
                label="Introduction Description"
              >
                <Input.TextArea />
              </Form.Item>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row>
        <Col span={20}>
          <Text
            fl="unset"
            fs="18px"
            mt="15px"
            fw="600"
            color="#595959"
            mb="30px"
          >
            Projects:
          </Text>
        </Col>
      </Row>
      <Row>
        <Col span={20}>
          <Form.List name="projects">
            {(fields, { add, remove }) => (
              <>
                {fields.map((field) => (
                  <Row
                    style={{
                      border: "1px dashed rgb(24 144 255 / 32%)",
                      marginBottom: "10px",
                      padding: "20px 0",
                    }}
                  >
                    <Col span={20}>
                      <Row>
                        <Col span={24}>
                          <Form.Item
                            {...field}
                            label="Role"
                            name={[field.name, "role"]}
                            rules={[{ required: false, message: "Role" }]}
                          >
                            <Input />
                          </Form.Item>
                        </Col>
                      </Row>
                      <Row>
                        <Col span={24}>
                          <Form.Item
                            label="Project Description"
                            {...field}
                            name={[field.name, "description"]}
                            rules={[
                              {
                                required: false,
                                message: "Project Description required",
                              },
                            ]}
                          >
                            <TextArea placeholder="Project Description" />
                          </Form.Item>
                        </Col>
                      </Row>
                    </Col>
                    <Col span={4}>
                      <div onClick={() => remove(field.name)}>
                        <MinusCircleOutlined /> Remove Project
                      </div>
                    </Col>
                  </Row>
                ))}

                <Row>
                  <Col span={24}>
                    <Form.Item>
                      <Button
                        type="dashed"
                        onClick={() => add()}
                        block
                        icon={<PlusOutlined />}
                      >
                        Add Projects
                      </Button>
                    </Form.Item>
                  </Col>
                </Row>
              </>
            )}
          </Form.List>
        </Col>
      </Row>

      <Row>
        <Col span={20}>
          <Text
            fl="unset"
            fs="18px"
            mt="15px"
            fw="600"
            color="#595959"
            mb="30px"
          >
            Education:
          </Text>
        </Col>
      </Row>

      <Row>
        <Col span={20}>
          <Form.List name="educations">
            {(fields, { add, remove }) => (
              <>
                {fields.map((field) => (
                  <Row
                    style={{
                      border: "1px dashed rgb(24 144 255 / 32%)",
                      marginBottom: "10px",
                      padding: "20px 0",
                    }}
                  >
                    <Col span={20}>
                      <Row>
                        <Col span={24}>
                          <Form.Item
                            {...field}
                            label="Course"
                            name={[field.name, "course"]}
                            rules={[
                              {
                                required: true,
                                message: "Course Required",
                              },
                            ]}
                          >
                            <Input />
                          </Form.Item>
                        </Col>
                      </Row>
                      <Row>
                        <Col span={24}>
                          <Form.Item
                            {...field}
                            label="Course Description"
                            name={[field.name, "description"]}
                            rules={[
                              {
                                required: true,
                                message: "Course Description required",
                              },
                            ]}
                          >
                            <TextArea placeholder="Project Description" />
                          </Form.Item>
                        </Col>
                      </Row>
                    </Col>
                    <Col span={4}>
                      <div onClick={() => remove(field.name)}>
                        <MinusCircleOutlined /> Remove Course
                      </div>
                    </Col>
                  </Row>
                ))}

                <Row>
                  <Col span={24}>
                    <Form.Item>
                      <Button
                        type="dashed"
                        onClick={() => add()}
                        block
                        icon={<PlusOutlined />}
                      >
                        Add Education
                      </Button>
                    </Form.Item>
                  </Col>
                </Row>
              </>
            )}
          </Form.List>
        </Col>
      </Row>

      <Row>
        <Col span={20}>
          <Text
            fl="unset"
            fs="18px"
            mt="15px"
            fw="600"
            color="#595959"
            mb="30px"
          >
            Skills:
          </Text>
        </Col>
      </Row>
      <Row>
        <Col span={20}>
          <Row>
            <Col span={20}>
              <Form.Item
                label="Skill Intro"
                name="skill_intro"
                rules={[
                  { required: true, message: "Please input Skill Intro" },
                ]}
              >
                <Input placeholder="Skill Intro" />
              </Form.Item>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col span={20}>
          <Form.List name="skills">
            {(fields, { add, remove }) => (
              <>
                {fields.map((field) => (
                  <Row
                    style={{
                      border: "1px dashed rgb(24 144 255 / 32%)",
                      marginBottom: "10px",
                      padding: "20px 0",
                    }}
                  >
                    <Col span={20}>
                      <Row>
                        <Col span={24}>
                          <Form.Item
                            {...field}
                            label="Skill Name"
                            name={[field.name, "name"]}
                            rules={[
                              {
                                required: true,
                                message: "Skill name required",
                              },
                            ]}
                          >
                            <Input />
                          </Form.Item>
                        </Col>
                      </Row>
                      <Row>
                        <Col span={24}>
                          <Form.Item
                            {...field}
                            label="Skill percentage"
                            name={[field.name, "percentage"]}
                            rules={[
                              {
                                required: true,
                                message: "Skill percentage required",
                              },
                            ]}
                          >
                            <Slider />
                          </Form.Item>
                        </Col>
                      </Row>
                      <Row>
                        <Col span={24}>
                          <Form.Item
                            label="Show Skill?"
                            {...field}
                            valuePropName="checked"
                            name={[field.name, "show"]}
                          >
                            <Checkbox />
                          </Form.Item>
                        </Col>
                      </Row>
                    </Col>
                    <Col span={4}>
                      <div onClick={() => remove(field.name)}>
                        <MinusCircleOutlined /> Remove Skill
                      </div>
                    </Col>
                  </Row>
                ))}

                <Row>
                  <Col span={24}>
                    <Form.Item>
                      <Button
                        type="dashed"
                        onClick={() => add()}
                        block
                        icon={<PlusOutlined />}
                      >
                        Add Education
                      </Button>
                    </Form.Item>
                  </Col>
                </Row>
              </>
            )}
          </Form.List>
        </Col>
      </Row>
    </>
  );
}
export default EmployeeForm;

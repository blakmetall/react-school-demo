import React from 'react';
import { Col } from 'react-bootstrap';
import { ScrollContent, ThemeWrapper } from '../components';

export default {
    title: 'Components/ScrollContent',
    component: ScrollContent,
    decorators: [
        Story => (
            <ThemeWrapper>
                <Story />
            </ThemeWrapper>
        ),
    ],
};

const largeLoremText = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea veniam eos quos, quae suscipit ipsam, neque vel
dolor consequuntur iure minus aut facilis dolores, repellendus libero voluptatibus laboriosam inventore alias!
At, suscipit error officia magnam, quam nesciunt veritatis atque reiciendis, cupiditate maiores necessitatibus
vero! Saepe rem aspernatur recusandae magnam, impedit ad? Exercitationem ex nihil sit totam iure eum accusamus
recusandae. Reiciendis dolorum dolorem architecto nemo ipsum vero saepe. Soluta iure dolorem nisi hic nesciunt
ipsam cumque, illum ut corporis officiis libero, doloribus incidunt? Dolorum quidem ipsa praesentium. Fugiat,
dolor magni. Saepe, vel voluptas. Voluptate quis ullam ipsum sequi repellendus ipsam culpa, magnam iure quidem
ducimus suscipit placeat rem nihil distinctio excepturi optio ab et. Magni corporis facilis ipsum sint fugiat?
Sint molestiae neque aspernatur iure sapiente! Natus praesentium a eaque modi sunt ipsa accusamus eveniet
temporibus? Labore, harum id! Ipsa dignissimos ullam voluptatem exercitationem illo, voluptatum ex veritatis
vitae at. Nobis deserunt mollitia accusamus commodi molestiae doloremque? Impedit excepturi recusandae
commodi, rerum asperiores possimus ratione alias cupiditate corporis et optio expedita reprehenderit
voluptates, dignissimos doloribus illo quas molestias voluptatibus perferendis! Quos accusantium asperiores
sint minus dolor, voluptate debitis at adipisci perferendis aliquam eum veniam. Quis totam, in iste numquam
quas tempora sint quia eum aspernatur illum eaque inventore ex quod! Sunt quis consectetur porro optio hic
dolorum alias? Quae iusto corporis perspiciatis delectus nam autem officiis consectetur qui deserunt
distinctio cum eos error dolor magnam aliquid mollitia vero, dolore excepturi! Dolores optio, impedit ducimus
provident amet atque similique earum, et culpa expedita eum iure debitis maxime quisquam ullam accusantium
minima officiis non inventore quae veritatis pariatur ad commodi. Dicta, autem. Voluptates tenetur nam
temporibus excepturi at quia, praesentium aperiam totam amet quis numquam deleniti! Sunt neque quia veniam
doloribus tempore quis, ex velit dolores nisi temporibus odit? Amet, velit nemo!
`

export const Default = () => (
    <ThemeWrapper>
        <div className="col-6 bg-green p-3" style={{height:"200px"}}>
            <ScrollContent >
                <h5 className="app-font-20 mb-4 ">Scroll!</h5>
                {largeLoremText}
            </ScrollContent>
        </div>
    </ThemeWrapper>
);

export const ClassName = () => (
    <ThemeWrapper>
        <div className="bg-green p-5" style={{height:"400px"}}>
            <ScrollContent className="p-5">
                <h5 className="app-font-20 mb-4">Scroll!</h5>
                {largeLoremText}
            </ScrollContent>
        </div>
    </ThemeWrapper>
);

export const CustomHeight = () => (
    <ThemeWrapper>
        {/* situation 1 */}
        <Col className="d-flex">
            <Col className="col-6 bg-green p-3">
                <ScrollContent maxHeight="380px" className="p-5">
                    <h5 className="app-font-20 mb-4">maxHeight defined for vertical align purposes<br/><br/>the component min height is defined by the content </h5>
                    {largeLoremText}
                </ScrollContent>
            </Col>

            {/* situation 2 */}
            <Col className="col-6">
                <div className="bg-green p-3" style={{ height: '410px', overflow: 'hidden' }}>
                    <ScrollContent maxHeight="100%" className="p-5">
                        <h5 className="app-font-20 mb-4">"maxHeight: 100%" & Limit the parent height for vertical align purposes<br/><br/> the component min height is defined by the content</h5>
                        {largeLoremText}
                    </ScrollContent>
                </div>
            </Col>
        </Col>

        {/* situation 3 */}
        <Col className="bg-green p-3 m-3">
            <ScrollContent height="300px" className="p-5">
                <h5 className="app-font-20 mb-4">We can set a static height if we want our component not to decrease its height if the content decreases.</h5>
                {largeLoremText}
            </ScrollContent>
        </Col>
    </ThemeWrapper>
);

export const HorizontalScroll = () => (
    <ThemeWrapper>
        <div className="bg-green p-5">
            <ScrollContent className="p-5">
                {/* eslint-disable-next-line */}
                <h5 className="app-font-20 mb-4">Horizontal Scroll! ───────> </h5>
                <div className="text-nowrap">
                    {largeLoremText}
                </div>
            </ScrollContent>
        </div>

        <div className="col-6 bg-green p-5">
            <ScrollContent className="p-5">
                {/* eslint-disable-next-line */}
                <h5 className="app-font-20 mb-4">Horizontal Scroll! ───────> </h5>
                <div className="d-inline-flex flex-grow-1">
                    <div className="rounded bg-dark mx-5" style={{ height: '50px', width: '50px' }} />
                    <div className="rounded bg-dark mx-5" style={{ height: '50px', width: '50px' }} />
                    <div className="rounded bg-dark mx-5" style={{ height: '50px', width: '50px' }} />
                    <div className="rounded bg-dark mx-5" style={{ height: '50px', width: '50px' }} />
                    <div className="rounded-circle bg-dark mx-5" style={{ height: '50px', width: '50px' }} />
                    <div className="rounded-circle bg-dark mx-5" style={{ height: '50px', width: '50px' }} />
                    <div className="rounded-circle bg-dark mx-5" style={{ height: '50px', width: '50px' }} />
                    <div className="rounded-circle bg-dark mx-5" style={{ height: '50px', width: '50px' }} />
                </div>
            </ScrollContent>
        </div>

            <ScrollContent className="p-5" width="300px">
                {/* eslint-disable-next-line */}
                <h5 className="app-font-20 mb-4">Horizontal Scroll , via props </h5>
                <div className="d-inline-flex flex-grow-1">
                    <div className="rounded bg-dark mx-5" style={{ height: '50px', width: '50px' }} />
                    <div className="rounded bg-dark mx-5" style={{ height: '50px', width: '50px' }} />
                    <div className="rounded bg-dark mx-5" style={{ height: '50px', width: '50px' }} />
                    <div className="rounded bg-dark mx-5" style={{ height: '50px', width: '50px' }} />
                    <div className="rounded-circle bg-dark mx-5" style={{ height: '50px', width: '50px' }} />
                    <div className="rounded-circle bg-dark mx-5" style={{ height: '50px', width: '50px' }} />
                    <div className="rounded-circle bg-dark mx-5" style={{ height: '50px', width: '50px' }} />
                    <div className="rounded-circle bg-dark mx-5" style={{ height: '50px', width: '50px' }} />
                </div>
            </ScrollContent>
    </ThemeWrapper>

    // Agregar un label para indicar cuando no hay archivos subidos...
);

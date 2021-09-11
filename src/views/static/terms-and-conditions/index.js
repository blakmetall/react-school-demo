import React from 'react';
import { Container } from 'react-bootstrap';
import PageHeading from '../../../components/page-heading';
import PageContainer from '../../../components/page-container';

const TermsPage = () => {
    return (
        <div className="flex-grow-1 h-100">
            <PageHeading />
            <PageContainer contentPaddingClass="p-5">
                <div className="p-4 text-gray-500 bg-white">
                    <Container>
                        <h1 className="app-font-28 font-weight-600 text-primary my-5 text-center">Términos y Condiciones</h1>

                        <h3 className="app-font-18 font-weight-600 text-primary mb-3">Lorem Title</h3>
                        <p className="mb-4">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi pariatur voluptate deserunt quia,
                            veritatis assumenda cumque culpa! Atque saepe unde provident nisi natus quas perferendis blanditiis
                            reprehenderit vel? Ipsa, assumenda? Cumque vitae impedit ducimus, blanditiis nisi tenetur corporis
                            pariatur, earum voluptatem minima eveniet obcaecati eum beatae tempora totam libero iusto accusamus
                            odit, nostrum aspernatur architecto repellendus sit. Voluptatibus, debitis doloremque? Tenetur,
                            eveniet repellat aliquam ad, corporis, quis sequi debitis est
                        </p>
                        <p className="mb-4">
                            deserunt quidem dolore ab praesentium optio? Saepe, odio, praesentium velit accusamus, modi quia
                            obcaecati voluptatum labore recusandae ullam molestiae perferendis.
                        </p>
                        <p className="mb-4">
                            deserunt quidem dolore ab praesentium optio? Saepe, odio, praesentium velit accusamus, modi quia
                            obcaecati voluptatum labore recusandae ullam molestiae perferendis.
                        </p>
                        <h3 className=" app-font-18 font-weight-600 text-primary mb-3">Lorem Title</h3>
                        <p className="mb-5">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi pariatur voluptate deserunt quia,
                            veritatis assumenda cumque culpa! Atque saepe unde provident nisi natus quas perferendis blanditiis
                            reprehenderit vel? Ipsa, assumenda? Cumque vitae impedit ducimus, blanditiis nisi tenetur corporis
                            pariatur, earum voluptatem minima eveniet obcaecati eum beatae tempora totam libero iusto accusamus
                            odit, nostrum aspernatur architecto repellendus sit. Voluptatibus, debitis doloremque? Tenetur,
                            eveniet repellat aliquam ad, corporis, quis sequi debitis est deserunt quidem dolore ab praesentium
                            optio? Saepe, odio, praesentium velit accusamus, modi quia obcaecati voluptatum labore recusandae
                            ullam molestiae perferendis.
                        </p>
                    </Container>
                </div>
            </PageContainer>
        </div>
    );
};

export default TermsPage;

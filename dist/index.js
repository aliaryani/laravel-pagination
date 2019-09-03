import React from 'react';
import Button from "@material-ui/core/Button";
import Paper from '@material-ui/core/Paper';
import Grid from "@material-ui/core/Grid";

const CustomButton = (props) => (
    <div>
        {console.log('props', props)}
        <Paper>
            <Grid
                container
                justify="center"
                spacing={2}
                style={{ marginTop: 16, marginBottom: 32 }}
            >

                <Grid item xs={6} md={2}>
                    <Button
                        onClick={() => { props.clicked(props.data.first_page_url) }}

                    >
                        صفحه اول
                        </Button>
                </Grid>
                <Grid item xs={6} md={2}>
                    <Button
                        onClick={() => { props.clicked(props.data.prev_page_url) }}
                    >
                        صفحه قبل
                        </Button>
                </Grid>
                <Grid item xs={6} md={2}>
                    <Button


                        onClick={() => { props.clicked(props.data.next_page_url) }}

                    >
                        صفحه بعد
                        </Button>
                </Grid>
                <Grid item xs={6} md={2}>
                    <Button


                        onClick={() => { props.clicked(props.data.last_page_url) }}
                    >
                        صفحه آخر
                        </Button>
                </Grid>

            </Grid>
        </Paper>


    </div>
)






export default CustomButton;
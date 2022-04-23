import { Container, Grid, IconButton, InputAdornment, Paper, TextField, Typography } from '@mui/material'
import React from 'react'

import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import { Tweet } from '../components/Tweet/Tweet';
import { Sidebar } from '../components/Sidebar';
import { AddTweetForm } from '../components/AddTweetForm';
import AddPersonIcon from '@mui/icons-material/PersonAddOutlined';

const SearchTextBlock = styled(TextField)`
    * {
        border: none;
    }

    div {
        background-color: #E6ECF0;
        border-radius: 30px;
    }

    input {
        background-color: '#E6ECF0';
        padding: 7px;
    }
    input:focus {
        border: none;
        border-radius: 30;
    }

    div:focus {
        border: none;
        outline: none;
    }

    fieldset {
        border: none
    }
`

const RightSide = styled('div')`
    position: sticky;
    top: 0;
    padding-top: 15px;
`

const RightSideBlock = styled('div')`
    background-color: #F5F8FA;
    margin-top: 20px;
`

const RightSideContent = styled('div')`
    cursor: pointer;
    
    div {
        &:hover {
            background-color: #E6ECF0;
            
        }
    }
`

const MainTheme = styled('span')`
    font-weight: 700;
    display: block;
`

const FlexWrapper = styled.div`
    display: flex;
    align-items: ${(props: FlexWrapperProps) => props.align};
    flex-direction: ${(props: FlexWrapperProps) => props.direction};
`
type FlexWrapperProps = {
    direction?: string
    align?: string
}

export const Home = () => {
    return (
        <Container maxWidth='lg'>
            <Grid container spacing={3}>
                <Grid item md={3} sm={2} sx={{ position: 'sticky' }}>
                    <Sidebar />
                </Grid>
                <Grid item md={6.5} sm={8}>
                    <Paper square sx={{ borderBottom: 0, borderTop: 0, height: '100%' }} variant='outlined'>
                        <Paper square variant='outlined' sx={{ borderLeft: 0, borderRight: 0, padding: '10px 15px', position: 'sticky', top: 0, left: 0, zIndex: 1000 }}>
                            <Typography variant='h6' sx={{ fontWeight: 700, borderRadius: 0 }}>Главная</Typography>
                        </Paper>
                        <Paper square variant='outlined' sx={{ borderBottomWidth: '5px' }}>
                            <AddTweetForm />
                        </Paper>
                        <Paper variant='outlined'>
                            <Tweet text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ducimus voluptatibus obcaecati eos nesciunt magni nemo dolores architecto eaque id voluptatum, minus quidem nulla.'} user={{
                                name: 'Nikita',
                                userName: '@Kolomyaka',
                                avatarUrl: 'https://i.pravatar.cc/45'
                            }} />
                            <Tweet text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ducimus voluptatibus obcaecati eos nesciunt magni nemo dolores architecto eaque id voluptatum, minus quidem nulla.'} user={{
                                name: 'Nikita',
                                userName: '@Kolomyaka',
                                avatarUrl: 'https://i.pravatar.cc/45'
                            }} />
                            <Tweet text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ducimus voluptatibus obcaecati eos nesciunt magni nemo dolores architecto eaque id voluptatum, minus quidem nulla.'} user={{
                                name: 'Nikita',
                                userName: '@Kolomyaka',
                                avatarUrl: 'https://i.pravatar.cc/45'
                            }} />
                            <Tweet text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ducimus voluptatibus obcaecati eos nesciunt magni nemo dolores architecto eaque id voluptatum, minus quidem nulla.'} user={{
                                name: 'Nikita',
                                userName: '@Kolomyaka',
                                avatarUrl: 'https://i.pravatar.cc/45'
                            }} />
                            <Tweet text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ducimus voluptatibus obcaecati eos nesciunt magni nemo dolores architecto eaque id voluptatum, minus quidem nulla.'} user={{
                                name: 'Nikita',
                                userName: '@Kolomyaka',
                                avatarUrl: 'https://i.pravatar.cc/45'
                            }} />
                            <Tweet text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ducimus voluptatibus obcaecati eos nesciunt magni nemo dolores architecto eaque id voluptatum, minus quidem nulla.'} user={{
                                name: 'Nikita',
                                userName: '@Kolomyaka',
                                avatarUrl: 'https://i.pravatar.cc/45'
                            }} />
                            <Tweet text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ducimus voluptatibus obcaecati eos nesciunt magni nemo dolores architecto eaque id voluptatum, minus quidem nulla.'} user={{
                                name: 'Nikita',
                                userName: '@Kolomyaka',
                                avatarUrl: 'https://i.pravatar.cc/45'
                            }} />
                            <Tweet text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ducimus voluptatibus obcaecati eos nesciunt magni nemo dolores architecto eaque id voluptatum, minus quidem nulla.'} user={{
                                name: 'Nikita',
                                userName: '@Kolomyaka',
                                avatarUrl: 'https://i.pravatar.cc/45'
                            }} />
                            <Tweet text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ducimus voluptatibus obcaecati eos nesciunt magni nemo dolores architecto eaque id voluptatum, minus quidem nulla.'} user={{
                                name: 'Nikita',
                                userName: '@Kolomyaka',
                                avatarUrl: 'https://i.pravatar.cc/45'
                            }} />
                        </Paper>
                    </Paper>
                </Grid>
                <Grid item md={2.5} sm={2}>
                    <RightSide>
                        <SearchTextBlock
                            fullWidth
                            placeholder='Поиск по Твиттеру'
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position='start'>
                                        <SearchIcon />
                                    </InputAdornment>
                                )
                            }}

                        />
                        <RightSideBlock>
                            <Paper square variant='outlined' sx={{ backgroundColor: '#F5F8FA', border: 'none' }}>
                                <Typography variant='h6' sx={{ padding: '5px 10px', fontWeight: '700', fontSize: '1' }}>Актуальные темы</Typography>
                            </Paper>
                            <RightSideContent>
                                <Paper square variant='outlined' sx={{ backgroundColor: '#F5F8FA', padding: '5px 10px', borderLeft: 'none', borderRight: 'none' }}>
                                    <MainTheme>Санкт-Петербург</MainTheme>
                                    <span style={{ color: 'rgba(0,0,0,0.5)' }}>Твитов: 3 331</span>
                                </Paper>
                                <Paper square variant='outlined' sx={{ backgroundColor: '#F5F8FA', padding: '5px 10px', border: 'none' }}>
                                    <MainTheme>#Коронавирус</MainTheme>
                                    <span style={{ color: 'rgba(0,0,0,0.5)' }}>Твитов: 163 122</span>
                                </Paper>
                                <Paper square variant='outlined' sx={{ backgroundColor: '#F5F8FA', padding: '5px 10px', borderLeft: 'none', borderRight: 'none' }}>
                                    <MainTheme>Беларусь</MainTheme>
                                    <span style={{ color: 'rgba(0,0,0,0.5)' }}>Твитов: 13 553</span>
                                </Paper>
                            </RightSideContent>
                        </RightSideBlock>
                        <RightSideBlock>
                            <Paper square variant='outlined' sx={{ backgroundColor: '#F5F8FA', border: 'none' }}>
                                <Typography variant='h6' sx={{ padding: '5px 10px', fontWeight: '700', fontSize: '1' }}>Кого читать</Typography>
                            </Paper>
                            <RightSideContent>
                                <Paper square variant='outlined' sx={{ backgroundColor: '#F5F8FA', padding: '5px 10px', borderLeft: 'none', borderRight: 'none' }}>
                                    <FlexWrapper align='center'>
                                        <img src="https://i.pravatar.cc/35" alt="userAvatar" style={{ borderRadius: '50%', margin: '5px 9px 0 0' }} />
                                        <FlexWrapper direction='column' >
                                            <div style={{ fontSize: "15px", fontWeight: 700 }}>Dock of Shame</div>
                                            <div style={{ fontSize: "12px", color: '#9e9e9e' }}>@FavDockOfShame</div>
                                        </FlexWrapper>
                                        <IconButton sx={{ marginLeft: '10px' }}>
                                            <AddPersonIcon color='primary' />
                                        </IconButton>
                                    </FlexWrapper>
                                </Paper>
                            </RightSideContent>
                        </RightSideBlock>
                    </RightSide>

                </Grid>
            </Grid>
        </Container >
    )
}

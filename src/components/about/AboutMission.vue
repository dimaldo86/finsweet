<template>
    <div class="container">
        <section class="bg-lavendar pb-6 sm:pb-8 md:pb-12 lg:pb-16">
            <div class="flex flex-col w-full">
                <div class="lg:relative">
                    <img class="min-h-[250px]" src="@/assets/img/about/mission.jpg" alt="mission">
                    <div class="lg:absolute w-full bottom-0 lg:left-[9%] lg:z-10">
                        <ul class="flex flex-col xs:flex-row w-full md:w-3/4 lg:w-[55%] bg-yellow px-4 sm:px-8 xl:px-12 py-4 sm:py-6 xl:py-8 gap-2 sm:gap-4 xl:gap-12">
                            <li
                                class="w-full xs:w-1/3 flex flex-col items-center sm:items-start"
                                v-for="item in missionUsers"
                                :key="item.id"
                            >
                                <div class="font-bold font-sen text-3xl xs:text-4xl sm:text-[56px] sm:leading-[4rem] -tracking-3">{{ item.count }}</div>
                                <div class="text-sm sm:text-base w-full text-center sm:text-left">{{ item.name }}</div>
                            </li>
                        </ul>
                        <div class="flex items-center w-full lg:w-2/3 h-6">
                            <div class="w-1/3 h-full bg-purple"></div>
                            <div class="w-2/3 h-full bg-yellow"></div>
                        </div>
                    </div>
                </div>
                <div class="w-full flex flex-col lg:flex-row gap-8 px-0 md:px-8 lg:px-16 xl:px-[108px] pt-6 md:pt-16 lg:pt-24 xl:pt-32 pb-6 md:pb-8 lg:pb-12 xl:pb-16">
                    <div class="flex flex-col w-full lg:w-1/2">
                        <div class="section__subtitle">Our mision</div>
                        <div class="mt-6 font-sen font-bold text-2xl sm:text-3xl -tracking-2">Creating valuable content for creatives all around the world</div>
                        <p class="mt-4 text-mediumGrey">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus.
                        </p>
                    </div>
                    <div class="flex flex-col w-full lg:w-1/2">
                        <div class="section__subtitle">Our Vision</div>
                        <div class="mt-6 font-sen font-bold text-2xl sm:text-3xl -tracking-2">A platform that empowers individuals to improve</div>
                        <p class="mt-4 text-mediumGrey">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus.
                        </p>
                    </div>
                </div>
            </div>

        </section>
    </div>

</template>

<script setup>
const missionUsers = [
    {
        id:1,
        name:'Blogs Published',
        count:'12+'
    },
    {
        id:2,
        name:'Views on Finsweet',
        count:'18K+'
    },
    {
        id:3,
        name:'Total active Users',
        count:'30K+'
    }
]

</script>


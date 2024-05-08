<template>
	<view>

		<view class="card">
			<img mode="widthFix" class="bg_img" :src="cover" alt="">
			<view class="filter_blur"></view>
			<view class="content">
				<view class="cover_box">
					<view class="player">
						<image src="../../static/Player_Play.png" v-if="!isPlayer" style="width: 100rpx;height: 100rpx;"
							@click="play()"></image>
						<image src="../../static/pause.png" v-else style="width: 60rpx;height: 60rpx;" @click="stop()">
						</image>
					</view>
					<img mode="widthFix" class="cover" :src="cover" alt="">
				</view>
				<view class="comment">
					{{ comment }}
				</view>
				<view class="author">
					——{{ user }}
				</view>
				<view class="author">
					《{{ songs }}》{{ sings }}
				</view>
				<view class="change" @click="change">
					<img src="../../static/change.png" alt="">
				</view>
			</view>
		</view>
	</view>
</template>

<script>
const innerAudioContext = uni.createInnerAudioContext();

export default {
    data() {
        return {
            isPlayer: false,
            cover: "",
            comment: "",
            user: "",
            songs: "",
            sings: ""
        }
    },
    methods: {
        play() {
            this.isPlayer = true;
            innerAudioContext.play();
        },
        stop() {
            this.isPlayer = false;
            innerAudioContext.stop();
        },
        change() {
            uni.showLoading({
                title: '加载中'
            });
            uni.request({
                url: 'https://tenapi.cn/v2/comment',
                method: 'GET',
                success: (response) => {
                    this.updateData(response.data.data);
                },
                fail: () => {
                    uni.showToast({
                        title: '加载失败',
                        icon: 'error'
                    });
                },
                complete: () => {
                    uni.hideLoading();
                }
            });
        },
        updateData(data) {
            this.cover = data.cover;
            this.comment = data.comment;
            this.user = data.name;
            this.songs = data.songs;
            this.sings = data.sings;
            innerAudioContext.autoplay = true;
            innerAudioContext.src = data.url;
        }
    },
    created() {
        this.change(); // Load initial data
    }
}
</script>

<style>
	.card {
		width: 600rpx;
		min-height: 900rpx;
		margin: 30rpx auto;
		border-radius: 30rpx;
		overflow: hidden;
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
	}

	.filter_blur {
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		background: rgba(180, 181, 183, 0.2);
		backdrop-filter: blur(60rpx);
		overflow: hidden;
		border-radius: 30rpx;
	}

	.bg_img {
		width: 100%;
		flex-shrink: 0;
		position: absolute;
		bottom: 0;
	}

	.content {
		z-index: 99;
		overflow: hidden;
		border-radius: 30rpx;
		position: relative;
	}

	.cover_box {
		position: relative;
	}

	.player {
		position: absolute;
		top: 50%;
		left: 50%;
		width: 150rpx;
		height: 150rpx;
		margin-left: -75rpx;
		margin-top: -75rpx;
		background: rgba(176, 176, 176, 0.2);
		backdrop-filter: blur(10rpx);
		border-radius: 50%;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.cover {
		width: 100%;
	}

	.comment {
		padding: 30rpx;
		font-size: 35rpx;
		color: #FFF
	}

	.author {
		text-align: right;
		padding: 0 30rpx 30rpx;
		font-size: 30rpx;
		color: #FFF
	}

	.change {
		width: 50rpx;
		height: 50rpx;
		position: absolute;
		left: 20rpx;
		bottom: 20rpx;
	}

	.change img {
		width: 100%;
		height: 100%;
		z-index: -1;
	}
</style>
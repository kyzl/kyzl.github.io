#define _CRT_SECURE_NO_WARNINGS
#include <iostream>
using namespace std;
#include "hero.h"
#include "Monster.h"
#include "Weapon.h"
#include "Knife.h"
#include "DragonSword.h"

void play() {
	// 创建怪物
	Monster * monster = new Monster;
	// 创建英雄
	Hero *hero = new Hero;

	// 创建武器
	Weapon *knife = new Knife;
	Weapon *dragonSword = new DragonSword;
	 
	// 让用户自己选择武器
	cout << "请选择武器" << endl;
	cout << "1.赤手空拳" << endl;
	cout << "2.小刀" << endl;
	cout << "3.屠龙刀" << endl;


	int oper;

	cin >> oper;

	switch (oper)
	{
	case 1:
		cout << "赤手空拳打" << endl;
		break;
	case 2:
		hero->equipWeapon(knife);
		break;
	case 3:
		hero->equipWeapon(dragonSword);
		break;
	default:
		cout << "输入数字有误" << endl;
		break;
	}

	getchar(); // 输入缓冲区中有回车  所以要获取一次Enter键的值
	int round = 1;

	while (true)
	{
		getchar();

		system("cls");
		cout << "-------当前是第"<< round<< " 回合" << endl;


		if (hero->m_Hp < 0 ) {
			cout << "英雄" <<hero->m_HeroName<<"挂掉了，游戏结束" << endl;
			break;
		}

		hero->attckMonster(monster);
		if (monster->m_Hp < 0) {
			cout << "怪物" << monster->m_MonsterName<< "挂掉了，游戏通关" << endl;
			break;
		}

		monster->attackHero(hero);

		if (hero->m_Hp < 0) {
			cout << "英雄" << hero->m_HeroName << "挂掉了，游戏结束" << endl;
			break;
		}

		cout << "英雄剩余血量"<< hero->m_Hp << endl;
		cout << "怪物剩余血量" << monster->m_Hp << endl;
		round++;

	}

	delete monster;
	delete hero;
	delete knife;
	delete dragonSword;

}





int main()
{


	play();
	system("pause");
	return EXIT_SUCCESS;
}